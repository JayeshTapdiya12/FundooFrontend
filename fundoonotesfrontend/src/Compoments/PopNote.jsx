import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Style/popNote.css';
import { editNote } from '../Services/NoteService';

export default function PopNote({ onClose }) {

    const { id } = useParams();
    console.log("id form pop note==============>", id)

    const [data, setData] = useState({
        title: "",
        description: "",
        color: ""
    })



    const edit = async () => {
        try {
            const res = await editNote(id, data)
        } catch (error) {
            console.log("error in popNOte=====>", error)
        }
    }



    const close = () => {
        onClose(true)
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Note Details</h2>

                    <button onClick={close}>Close</button>
                </div>
            </div>
        </>
    )
}
