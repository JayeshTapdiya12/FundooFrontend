import React, { useEffect, useState } from 'react';
import IconBaar from './IconBaar';
import '../Style/SingleNote.css';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PopNote from './PopNote';

export default function SingleNote({ note, tabV, setNoteCreated, noteCreated, isGrid }) {

    const navigate = useNavigate();
    const { id } = useParams()
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = (index) => setHoveredIndex(null);

    // for icon bar 
    const [icon, setIcon] = useState(2)

    const [bColor, setBColor] = useState('#2e2e2e')

    const [data, setData] = useState({
        title: '',
        description: '',
        color: bColor
    })
    console.log(bColor)
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
        <div className={`${isGrid === true ? 'card-container' : 'card-container2'}`}>
            {note.map((ele) => (
                <NavLink
                    to={`/dashboard/note/${ele._id}`} key={ele._id}  >
                    {/* className="card ,icon-bar-overlay" */}
                    <div className={`${isGrid === true ? 'card ,icon-bar-overlay' : 'card2 ,icon-bar-overlay'}`} onClick={openModal}
                        onMouseEnter={() => handleMouseEnter(ele._id)}
                        style={{ backgroundColor: `${ele.color}` }}>
                        <h2>{ele.title}</h2>
                        <p>{ele.description}</p>

                    </div>
                    <div>
                        {hoveredIndex === ele._id && (
                            <div className="icon-baar-container" onMouseLeave={handleMouseLeave}>
                                <IconBaar noteId={ele._id} setIcon={icon} tabV={tabV} setNoteCreated={setNoteCreated} setBColor={setBColor} />
                            </div>
                        )}
                    </div>
                </NavLink>
            ))}
            {isModalOpen && <PopNote onClose={closeModal} setNoteCreated={setNoteCreated} noteCreated={noteCreated} />}

        </div>
    );
}