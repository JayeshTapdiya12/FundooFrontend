import React, { useEffect, useState } from 'react'
import SideNav from '../Compoments/SideNav'
import '../Style/dasboard.css'
import InputNote from '../Compoments/InputNote'
import { allnote } from '../Services/NoteService'
import SingleNote from '../Compoments/SingleNote'

export default function Dashboard() {

    const [note, setNote] = useState([])
    const [tabs, setTabs] = useState(1)
    const [noteCreated, setNoteCreated] = useState(false)
    const [filter, setFilter] = useState();


    // icons ke liye


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
    // console.log(note)
    useEffect(() => {
        getNotes();
    }, [noteCreated])



    const filteredData = note.filter(item => {
        if (tabs === 1 && item.isDeleted === false && item.isArchived === false) {
            // console.log(item)
            return item
        } else if (tabs === 4 && item.isArchived === true) {
            // console.log(item)
            return item
        } else if (tabs === 5 && item.isDeleted === true) {
            // console.log(item)
            return item
        }

    });
    const tab = (value) => {
        setTabs(value)
    }

    return (

        <>
            <div className="dashboard-container">
                <SideNav tab={tab} />

                {tabs === 1 ? <div className="search">
                    <InputNote setNoteCreated={setNoteCreated} noteCreated={noteCreated} />
                </div> : <div style={{ marginTop: "5vw" }}></div>}


                <div className="singlenote">
                    <SingleNote note={filteredData} tabV={tabs} setNoteCreated={setNoteCreated} noteCreated={noteCreated} />
                </div>
            </div>


        </>
    )
}
