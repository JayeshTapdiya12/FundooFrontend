import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Style/popNote.css';
import { editNote } from '../Services/NoteService';
import InputNote from '../Compoments/InputNote'
export default function PopNote({ onClose, setNoteCreated, noteCreated }) {

    const { id } = useParams();
    console.log("id form pop note==============>", id)

    // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     color: ""
    // })

    const [edit, setedit] = useState(true);





    const close = () => {
        console.log(close);
        onClose(true)
        console.log(close)
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
