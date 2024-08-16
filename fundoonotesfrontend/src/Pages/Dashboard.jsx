import React from 'react'
import SideNav from '../Compoments/SideNav'
import '../Style/dasboard.css'
import InputNote from '../Compoments/InputNote'
export default function Dashboard() {
    return (
        <>
            <div style={{ backgroundColor: "#202124", height: '100vh', minHeight: '100vh' }}>
                <SideNav />
                <div className="search">
                    <InputNote />

                </div>
            </div>


        </>
    )
}
