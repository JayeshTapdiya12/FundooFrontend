import React, { useState } from 'react'
import '../Style/search.css'
import IconBaar from './IconBaar';

import { createNote } from '../Services/NoteService';



export default function InputNote({ setNoteCreated }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // for icon bar 
    const [icon, setIcon] = useState(1)

    const [data, setData] = useState({
        title: "",
        description: "",
        color: ""

    })

    const handleOpen = () => {
        setIsExpanded(true)
    }


    const send = async () => {

        try {
            if (data.title !== "" || data.description !== "") {
                const res = await createNote(data);
                console.log(res);
                setNoteCreated(true);
            } else {
                console.log("Both title and description are empty, not sending the note.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    const handleToggle = () => {


        if (data.title === "" && data.description === "") {
            setIsExpanded(false);
        } else {
            send();
            setIsExpanded(false);
            setData({
                title: "",
                description: "",
                color: ''
            })
        }

    };



    return (
        <>
            <div className={`note-input ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded && (
                    <div className="note-form">
                        <input type="text" placeholder="Title" className="title-input" name="title" value={data.title} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                    </div>
                )}
                <div className="note-header" onClick={handleOpen}>
                    <input
                        type="text"
                        placeholder="Take a note..."
                        className={`note-input-field ${isExpanded ? 'expanded-field' : ''}`}
                        name="description" value={data.description} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                    />
                </div>
                {isExpanded && (
                    <div className="note-footer">
                        <IconBaar setIcon={icon} />
                        <span className="close-btn" onClick={handleToggle}>Close</span>
                    </div>
                )}

            </div>
        </>
    )
}

