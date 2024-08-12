import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notesSlice';
import '../styles/NoteForm.css';
import { v4 as uuidv4 } from 'uuid';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';

const NoteForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const dispatch = useDispatch();
    const formRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const colorInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        if (contentRef.current) {
            contentRef.current.style.height = 'auto';
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title || content || image) {
            const newNote = {
                id: uuidv4(),
                title,
                content,
                image,
                color,
                pinned: false,
            };
            dispatch(addNote(newNote));
            setColor('');
            setTitle('');
            setContent('');
            setImage(null);
            setIsExpanded(false); // Collapse the form after submitting
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        console.log(e, "outsideclick",formRef.current, "formref", Node)
        if (formRef.current && !formRef.current.contains(e.target as Node)) {

            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const triggerColorPicker = () => {
        colorInputRef.current?.click();
    };

    const triggerImagePicker = () => {
        imageInputRef.current?.click();
    };

    return (
        <div className="expandarea" ref={formRef}>
            <form className="note-form" onSubmit={handleSubmit} style={{ backgroundColor: color, color: '#e8eaed' }}>
            {image && <img src={image} alt="Note" className="note-image-preview" />}

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ backgroundColor: color, color: '#e8eaed' }}
                    onFocus={handleExpand}
                />

                {isExpanded && (
                    <>

                        <textarea
                            ref={contentRef}
                            placeholder="Take a note..."
                            value={content}
                            onChange={handleContentChange}
                            style={{ backgroundColor: color, color: '#e8eaed', overflow: 'hidden', resize: 'none' }}
                        />
                        <div className="footer-card">
                            <div className="color-picker">
                                <ColorLensIcon
                                    style={{ marginRight: '5px', cursor: 'pointer' }}
                                    onClick={triggerColorPicker}
                                />
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    ref={colorInputRef}
                                    style={{ display: 'none' }}
                                />
                                <span className="form-text">Background Options</span>
                            </div>
                            <div className="image-upload">
                                <ImageIcon style={{ cursor: 'pointer' }} onClick={triggerImagePicker} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    ref={imageInputRef}
                                    style={{ display: 'none' }}
                                />
                                <span className="form-text">Add Image</span>
                            </div>
                            <div className="note-button">
                                <button type="submit">Close</button>
                            </div>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default NoteForm;
