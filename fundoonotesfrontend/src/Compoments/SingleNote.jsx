import React, { useState } from 'react';
import IconBaar from './IconBaar';
import '../Style/SingleNote.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PopNote from './PopNote';

export default function SingleNote({ note, tabV }) {

    const navigate = useNavigate();
    const { id } = useParams()
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    // for icon bar 
    const [icon, setIcon] = useState(2)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="card-container">
            {note.map((ele) => (
                <NavLink NavLink
                    to={`/dashboard/note/${ele._id}`} key={ele._id} onClick={openModal} >

                    <div className="card ,icon-bar-overlay"
                        onMouseEnter={() => handleMouseEnter(ele._id)}
                        onMouseLeave={handleMouseLeave}>
                        <h2>{ele.title}</h2>
                        <p>{ele.description}</p>
                        <div

                        >
                            {hoveredIndex === ele._id && (
                                <div className="icon-baar-container">
                                    <IconBaar noteId={ele._id} setIcon={icon} tabV={tabV} />
                                </div>
                            )}
                        </div>
                    </div>
                </NavLink>
            ))}
            {isModalOpen && <PopNote onClose={closeModal} />}

        </div>
    );
}