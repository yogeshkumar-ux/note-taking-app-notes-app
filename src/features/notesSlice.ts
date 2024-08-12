import { createSlice } from '@reduxjs/toolkit';

interface Note {
    id: string;
    title?: string;
    content: string;
    pinned: boolean;
    color?: string;
    image?: string;
  }

  interface NotesState {
    notes: Note[];
  }

  const initialState: NotesState = {
    notes: [],
  };




const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            console.log(state, action, "addnoteee")

            state.notes.push(action.payload);
        },
        deleteNote: (state, action) => {
            console.log(state,action,"deletingin slice")
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        pinNote: (state, action) => {
            
            const note = state.notes.find(note => note.id === action.payload);
            if (note) {
                note.pinned = true;
            }
        },
        unpinNote: (state, action) => {
            const note = state.notes.find(note => note.id === action.payload);
            if (note) {
                note.pinned = false;
            }
        },
        updateNote: (state, action) => {
            const { id, title, content, image, color } = action.payload;
            const note = state.notes.find(note => note.id === id);
            if (note) {
                note.title = title;
                note.content = content;
                note.image = image;
                note.color = color;
            }
        },
    },
});

export const { addNote, deleteNote, pinNote, unpinNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
