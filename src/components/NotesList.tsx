import React, { useEffect, useRef } from 'react';
import Note from './Note';
import '../styles/NotesList.css';

interface NoteType {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    image?: string;
    color?: any;
}

interface NotesListProps {
    notes: NoteType[];
    pinNote: (id: any) => void;
    unpinNote: (id: any) => void;
    deleteNote: (id: any) => void;
    updateNote: (note: NoteType) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, pinNote, unpinNote, deleteNote, updateNote }) => {
    const notesContainerRef = useRef<HTMLDivElement>(null);

    const pinnedNotes = notes.filter(note => note.pinned);
    const unpinnedNotes = notes.filter(note => !note.pinned);

    useEffect(() => {
        if (notesContainerRef.current) {
            const noteCards = notesContainerRef.current.querySelectorAll('.note-card');

            noteCards.forEach((note: any) => {
                const height = note.scrollHeight;
                const rowSpan = Math.ceil(height / 10); 
                note.style.gridRowEnd = `span ${rowSpan}`;
            });
        }
    }, [notes]);

    return (
        <div className="notes-list" ref={notesContainerRef}>
            {pinnedNotes.length > 0 && (
                <div >
                                        <h2 className="heading">PINNED</h2>

                <div className="pinned-notes-section">
                    {pinnedNotes.map(note => (
                        <Note
                            key={note.id}
                            note={note}
                            pinNote={pinNote}
                            unpinNote={unpinNote}
                            deleteNote={deleteNote}
                        />
                    ))}
                </div>
                </div>
            )}
            {unpinnedNotes.length > 0 && (
                 <div >
                                        <h2 className="heading">OTHERS</h2>
                <div className="unpinned-notes-section">
                    {unpinnedNotes.map(note => (
                        <Note
                            key={note.id}
                            note={note}
                            pinNote={pinNote}
                            unpinNote={unpinNote}
                            deleteNote={deleteNote}
                        />
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};

export default NotesList;
