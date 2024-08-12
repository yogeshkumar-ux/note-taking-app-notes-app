import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ note, pinNote, unpinNote, deleteNote }: any) => {
    console.log(note.color, "looping")
    const handlePinClick = () => {
        console.log(note, note.pinned)
        if (note.pinned == true) {
            unpinNote(note.id);
        } else {
            pinNote(note.id);
        }
    };

    const handleDeleteClick = () => {
        console.log(note, "deleting")
        deleteNote(note.id);
    };

 
    return (
        <div className="note-grid" >
        <div className={`note-card ${note.isPinned ? 'pinned' : ''}`} style={{ backgroundColor: note.color || '#202124' }}>
  
      {note.image && <img src={note.image} alt="Note" style={{ maxWidth: '100%', borderRadius: '4px' }} />}
      <div className="note-actions">
        <div className="note" style={{ backgroundColor: note.color }}>
            
        <div className="pin-icon" onClick={handlePinClick}>
            {note.pinned ? (
    <>
    
        <PushPinIcon />
        <span className="icon-text">Unpin</span>
    </>
) : (
    <>
        <PushPinIcon />
        <span className="icon-text">Pin</span>
    </>
)}
            </div>
            <div className="delete-icon"  data-tooltip="Delete" onClick={handleDeleteClick}>

            <DeleteIcon/>
            <span className="icon-text">delete</span>
            </div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
           
            </div>
            </div>
          
        </div>
        </div>
    );
};

export default Note;
