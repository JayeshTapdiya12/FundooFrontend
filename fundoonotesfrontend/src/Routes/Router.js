import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<SignUp />} />
                    <Route path='/login' exact element={<Login />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
