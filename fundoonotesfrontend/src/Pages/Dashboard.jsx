import React, { useEffect, useState } from 'react'
import SideNav from '../Compoments/SideNav'
import '../Style/dasboard.css'
import InputNote from '../Compoments/InputNote'
import { allnote } from '../Services/NoteService'
import SingleNote from '../Compoments/SingleNote'

export default function Dashboard() {

    const [note, setNote] = useState([])

    const getNotes = async () => {
        try {
            const res = await allnote();
            const data1 = res?.data?.data || [];
            setNote(data1);
        } catch (error) {
            console.error("Failed to fetch notes:", error);
            setNote([]); // Fallback to an empty array in case of an error
        }
    }
    console.log(note)
    useEffect(() => {
        getNotes();
    }, [])


    return (

        <>
            <div style={{ backgroundColor: "#202124", height: '100vh', minHeight: '100vh' }} >
                <SideNav />
                <div className="search">
                    <InputNote />
                </div>
                <div className="singlenote">
                    <SingleNote note={note} />
                </div>
            </div>


        </>
    )
}
