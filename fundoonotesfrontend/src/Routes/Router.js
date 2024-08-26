import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'
import SingleNote from '../Compoments/SingleNote'
import PopNote from '../Compoments/PopNote'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' exact element={<AuthRoute> <SignUp /> </AuthRoute>} />
                    <Route path='/login' element={<AuthRoute> <Login /></AuthRoute>} />
                    <Route path='/dashboard/' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} >
                        {/* <Route path="/dashboard/note/:id" element={<ProtectedRoute><PopNote /></ProtectedRoute>} /> */}
                        <Route path="/dashboard/note/:id" element={<ProtectedRoute><PopNote /></ProtectedRoute>} />
                        {/* <Route path='reminder' element={<ProtectedRoute> </ProtectedRoute>} />
                        <Route path='archive' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route path='editlables' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route path='trash' element={<ProtectedRoute></ProtectedRoute>} /> */}



                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
