import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Link, Box } from '@mui/material';
import '../Style/login.css'
import { login } from '../Services/UserService';


function Login() {


    const handleSubmit = async () => {
        let res = await login()
        console.log(res?.data.data)
        localStorage.setItem("token", res?.data?.data)
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
                    />

                    <TextField

                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
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
                        <Link href="#" variant="body2">
                            Create account
                        </Link>
                    </Box>
                </Container>
            </form>
        </>
    )
}

export default Login;