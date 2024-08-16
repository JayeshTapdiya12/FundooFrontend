import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import '../Style/login.css'
import { login } from '../Services/UserService';


function Login() {

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await login(userDetails)
        console.log(res?.data.data)
        localStorage.setItem("token", res?.data?.data)
        console.log(userDetails)
    }

    return (
        <>
            <form className='login'>
                <Container maxWidth="xs">
                    <Box textAlign="center" marginBottom={2}>
                        <Typography variant="h5" gutterBottom>
                            Login
                        </Typography>
                        <Typography variant="subtitle1">
                            Use your Google Account
                        </Typography>
                    </Box>

                    <TextField
                        type='email'
                        label="Email or phone"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="email"
                        value={userDetails.email}
                        onChange={(e) => { setUserDetails({ ...userDetails, [e.target.name]: e.target.value }) }}
                    />

                    <TextField

                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="password"
                        value={userDetails.password}
                        onChange={(e) => { setUserDetails({ ...userDetails, [e.target.name]: e.target.value }) }}
                    />

                    <Box textAlign="right" marginBottom={2}>
                        <Link href="#" variant="body2">
                            Forgot Password?
                        </Link>
                    </Box>


                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} >
                        login
                    </Button>

                    <Box textAlign="center" marginTop={2}>

                        <Link to='/' variant="body2">
                            <Button type="submit" variant="contained" color="primary">    Create account
                            </Button></Link>
                    </Box>
                </Container>
            </form>
        </>
    )
}

export default Login;