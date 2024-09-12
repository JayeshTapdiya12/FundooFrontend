import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Style/popNote.css';
import { editNote } from '../Services/NoteService';
import InputNote from '../Compoments/InputNote'
export default function PopNote({ onClose, setNoteCreated, noteCreated }) {

    const { id } = useParams();

    // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     color: ""
    // })

    const [edit, setedit] = useState(true);





    const close = () => {
        onClose(true)
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    {/* <h2>Note Details</h2> */}
                    <br />
                    <InputNote editn={edit} close={close} setNoteCreated={setNoteCreated} noteCreated={noteCreated} />

                    {/* <button onClick={close}>Close</button> */}
                </div>
            </div>
        </>
    )
}
