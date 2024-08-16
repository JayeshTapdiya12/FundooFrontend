import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' exact element={<AuthRoute> <SignUp /> </AuthRoute>} />
                    <Route path='/login' element={<AuthRoute> <Login /></AuthRoute>} />
                    <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
