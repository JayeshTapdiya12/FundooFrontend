import React, { useEffect, useState } from 'react';
import IconBaar from './IconBaar';
import '../Style/SingleNote.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PopNote from './PopNote';
import { findNote } from '../Services/NoteService';

export default function SingleNote({ note, tabV, setNoteCreated, noteCreated }) {

    const navigate = useNavigate();
    const { id } = useParams()
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    // for icon bar 
    const [icon, setIcon] = useState(2)


    const [data, setData] = useState({
        title: '',
        description: '',
        color: ''
    })

    const [isModalOpen, setIsModalOpen] = useState(false);


    // const find = async () => {
    //     const res = await findNote(id);
    //     const data1 = res?.data?.data;
    //     setData({
    //         title: data1.title,
    //         description: data1.description,
    //         color: data1.color
    //     })
    // }


    const openModal = () => {
        setIsModalOpen(true);
        // find()
    }
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="card-container">
            {note.map((ele) => (
                <NavLink NavLink
                    to={`/dashboard/note/${ele._id}`} key={ele._id}  >

                    <div className="card ,icon-bar-overlay" onClick={openModal}
                        onMouseEnter={() => handleMouseEnter(ele._id)}
                    >
                        <h2>{ele.title}</h2>
                        <p>{ele.description}</p>

                    </div>
                    <div>
                        {hoveredIndex === ele._id && (
                            <div className="icon-baar-container" onMouseLeave={handleMouseLeave}>
                                <IconBaar noteId={ele._id} setIcon={icon} tabV={tabV} setNoteCreated={setNoteCreated} />
                            </div>
                        )}
                    </div>
                </NavLink>
            ))}
            {isModalOpen && <PopNote onClose={closeModal} setNoteCreated={setNoteCreated} noteCreated={noteCreated} />}

        </div>
    );
}