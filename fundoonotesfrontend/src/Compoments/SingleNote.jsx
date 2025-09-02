import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PopNote from './PopNote';
import '../Style/SingleNote.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deletecollaborators, deletelabel } from '../Services/NoteService';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconBaar from './IconBaar';
import { convertLength } from '@mui/material/styles/cssUtils';

export default function SingleNote({ note, tabV, setNoteCreated, noteCreated, isGrid }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [expandedNoteId, setExpandedNoteId] = useState(null);
    const [modalNoteId, setModalNoteId] = useState(null);
    const [bColor, setBColor] = useState('#2e2e2e');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [icon, setIcon] = useState(2);
    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const openModal = (noteId) => setModalNoteId(noteId);
    const closeModal = () => setModalNoteId(null);

    const handleDelete = async (label, note_id) => {
        try {
            await deletelabel(note_id, label);
        } catch (error) {
            console.error('Failed to delete the note label:', error);
        }
    };

    const removecoll = async (noteId, email) => {
        try {
            await deletecollaborators(noteId, email);
        } catch (error) {
            console.error('Failed to delete the note collaborator:', error);
        }
    };
    const handleToggleExpand = (noteId) => {
        setExpandedNoteId(expandedNoteId === noteId ? null : noteId);  // If the note is already expanded, collapse it
    };

    return (
        <>
            {tabV === 3 ? (
                <>
                    {console.log(note)}
                    {note.map((ele) => {
                        return ele.label.map((labe, index) => (
                            <>
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar src="/broken-image.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText primary={labe} style={{ "color": "white", cursor: 'pointer' }} />
                                    <span
                                        className="close-btn"
                                        style={{ color: "white", cursor: 'pointer' }}
                                    // onClick={() => removecoll(ele.note_id, collaborator)}
                                    >
                                        updatelabel
                                    </span>
                                    <span
                                        className="close-btn"
                                        style={{ color: "white", cursor: 'pointer' }}
                                    // onClick={() => removecoll(ele.note_id, collaborator)}
                                    >
                                        removelabel
                                    </span>
                                </ListItem>

                            </>
                        ));
                    })}

                </>
            ) : (
                <div className={`${isGrid === true ? 'card-container' : 'card-container2'}`}>
                    {note.map((ele) => (
                        <NavLink to={`/dashboard/note/${ele.note_id}`} key={ele.note_id} style={{ textDecoration: 'none' }}>
                            <div
                                className={`${isGrid === true ? 'card ,icon-bar-overlay' : 'card2 ,icon-bar-overlay'}`}
                                onMouseEnter={() => handleMouseEnter(ele.note_id)}
                                style={{
                                    backgroundColor: `${ele.color}`,
                                }}
                            >
                                <h2 onClick={openModal}>{ele.title}</h2>
                                <p onClick={openModal}>{ele.description}</p>

                                {ele.label && Array.isArray(ele.label) && (
                                    <Stack direction="row" spacing={1}>
                                        {ele.label.map((label, index) => (
                                            <Chip
                                                key={index}
                                                label={label}
                                                variant="outlined"
                                                onDelete={() => handleDelete(label, ele.note_id)}
                                                style={{ color: 'white' }}
                                            />
                                        ))}
                                    </Stack>
                                )}
                                <br />
                                {ele.collaborators && Array.isArray(ele.collaborators) && (
                                    <>

                                        <Stack direction="row" spacing={2}>
                                            {ele.collaborators.map((collaborator, index) => (
                                                <Tooltip key={collaborator} title={collaborator} arrow onClick={() => handleToggleExpand(ele.note_id)}>
                                                    <Avatar src="/broken-image.jpg" />
                                                </Tooltip>
                                            ))}
                                        </Stack>

                                        {expandedNoteId === ele.note_id && (
                                            <List>
                                                {ele.collaborators.map((collaborator, index) => (
                                                    <ListItem key={index}>
                                                        <ListItemAvatar>
                                                            <Avatar src="/broken-image.jpg" />
                                                        </ListItemAvatar>
                                                        <ListItemText primary={collaborator} />

                                                        <span
                                                            className="close-btn"
                                                            style={{ color: "black", cursor: 'pointer' }}
                                                            onClick={() => removecoll(ele.note_id, collaborator)}
                                                        >
                                                            remove
                                                        </span>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                    </>
                                )}

                                <div>
                                    {hoveredIndex === ele.note_id && (
                                        <div className="icon-baar-container" onMouseLeave={handleMouseLeave}>
                                            <IconBaar
                                                noteId={ele.note_id}
                                                setIcon={icon}
                                                tabV={tabV}
                                                setNoteCreated={setNoteCreated}
                                                setBColor={setBColor}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </NavLink>
                    ))}

                    {isModalOpen && <PopNote onClose={closeModal} setNoteCreated={setNoteCreated} noteCreated={noteCreated} />}
                </div>
            )}
        </>
    );

}
