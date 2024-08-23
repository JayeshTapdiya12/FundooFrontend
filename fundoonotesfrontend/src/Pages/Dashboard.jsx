import React, { useEffect, useState } from 'react'
import SideNav from '../Compoments/SideNav'
import '../Style/dasboard.css'
import InputNote from '../Compoments/InputNote'
import { allnote } from '../Services/NoteService'
import SingleNote from '../Compoments/SingleNote'

export default function Dashboard() {

    const [note, setNote] = useState([])

    const [noteCreated, setNoteCreated] = useState(false)

    const getNotes = async () => {
        try {
            const res = await allnote();
            const data1 = res?.data?.data || [];
            setNote(data1);
            setNoteCreated(false)
        } catch (error) {
            console.error("Failed to fetch notes:", error);
            setNote([]);
        }
    }
    console.log(note)
    useEffect(() => {
        getNotes();
    }, [noteCreated])


    return (

        <>
            <div className="dashboard-container">
                <SideNav />
                <div className="search">
                    <InputNote setNoteCreated={setNoteCreated} />
                </div>
                <div className="singlenote">
                    <SingleNote note={note} />
                </div>
            </div>


        </>
    )
}
