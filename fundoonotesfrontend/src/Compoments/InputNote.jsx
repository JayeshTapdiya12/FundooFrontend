import React, { useState, useEffect, useContext } from 'react';
import '../Style/search.css';
import IconBaar from './IconBaar';
import { createNote, editNote, findNote } from '../Services/NoteService';
import { useParams } from 'react-router-dom';

export default function InputNote({ setNoteCreated, editn, close, noteCreated }) {


    const [isExpanded, setIsExpanded] = useState(false);
    const [edit, setEdit] = useState(editn || false);
    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            const res = await findNote(id);
            setEData(res?.data?.data);
            console.log(res?.data?.data)
        };
        fetchNote();
        // setIsExpanded(true)
    }, [id]);


    const [input, setInput] = useState(true);


    // for icon bar
    const [icon, setIcon] = useState(1);



    const [col, setCol] = useState("");

    const [edata, setEData] = useState({
        title: "",
        description: "",
        color: col
    });

    const [data, setData] = useState({
        title: "",
        description: "",
        color: ""
    });

    const handleOpen = () => {
        setIsExpanded(true);
    };

    const handleCol = (value) => {
        setCol(value);
        setEData(prevDetails => ({
            ...prevDetails,

            color: value
        }));
        setData(prevDetails => ({
            ...prevDetails,

            color: value
        }));

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
    };



    const handleToggle = async () => {
        if (edit === true) {
            const res = await editNote(id, edata);
            setNoteCreated(true);
            close()
        } else {
            if (data.title === "" && data.description === "") {
                setIsExpanded(false);
                setCol("")
            } else {
                await send();
                setIsExpanded(false);
                setData({
                    title: "",
                    description: "",
                    color: ""
                });
                setCol("")
            }
        }
    };



    return (
        <>
            <div className={`note-input ${isExpanded ? 'expanded' : ''}`} style={{ backgroundColor: (edit === true) ? edata.color : col }} >
                {(isExpanded || edit === true) && (
                    <div className="note-form" >
                        <input
                            type="text"
                            placeholder="Title"
                            className="title-input"
                            name="title"
                            value={edit === true ? edata.title : data.title}
                            onChange={(e) =>
                                edit === true
                                    ? setEData({ ...edata, [e.target.name]: e.target.value })
                                    : setData({ ...data, [e.target.name]: e.target.value })
                            }

                        />
                    </div>
                )}
                <div className="note-header" onClick={handleOpen} >
                    <input
                        type="text"
                        placeholder="Take a note..."
                        className={`note-input-field ${isExpanded ? 'expanded-field' : ''}`}
                        name="description"
                        value={edit === true ? edata.description : data.description}
                        onChange={(e) =>
                            edit === true
                                ? setEData({ ...edata, [e.target.name]: e.target.value })
                                : setData({ ...data, [e.target.name]: e.target.value })
                        }

                    />
                </div>
                {(isExpanded || edit === true) && (
                    <div className="note-footer" >
                        <IconBaar setIcon={icon} input={input} handleCol={handleCol} />
                        <span className="close-btn" onClick={handleToggle}>Close</span>
                    </div>
                )}
            </div>
        </>
    );
}
