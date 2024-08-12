import React from 'react';
import Sidebar from './components/Sidebar';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import Taskbar from './components/Taskbar';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote, pinNote, unpinNote, updateNote } from './features/notesSlice';

const App = () => {
    const notes = useSelector((state: any) => state.notes.notes);
    const dispatch = useDispatch();

    const handleAddNote = (note: any) => {
        dispatch(addNote(note));
    };

    const handleDeleteNote = (id: number) => {
        dispatch(deleteNote(id));
    };

    const handlePinNote = (id: number) => {
        dispatch(pinNote(id));
    };

    const handleUnpinNote = (id: number) => {
        dispatch(unpinNote(id));
    };

    const handleUpdateNote = (note: any) => {
        dispatch(updateNote(note));
    };

    return (
        <div className="app">
            <Sidebar />
            <Taskbar/>

           
            <div className="main-content">
                <NoteForm  />
                <NotesList 
                    notes={notes} 
                    pinNote={handlePinNote} 
                    unpinNote={handleUnpinNote} 
                    deleteNote={handleDeleteNote} 
                    updateNote={handleUpdateNote}
                />
            </div>
        </div>
    );
};

export default App;
