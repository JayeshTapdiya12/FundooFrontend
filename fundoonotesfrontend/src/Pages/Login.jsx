import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import '../Style/login.css';
import { login } from '../Services/UserService';
import Alert from '@mui/material/Alert';

function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const send = async () => {
        if (userDetails.email === "" || userDetails.password === "") {
            setAlert(<Alert severity="error">Please enter all the details.</Alert>);
        } else {
            try {
                let res = await login(userDetails);
                localStorage.setItem("token", res?.data?.data);
                navigate('/dashboard');
            } catch (error) {
                setAlert(<Alert severity="error">Login failed. Please try again.</Alert>);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await send();
    };

    const handleShowPasswordChange = (e) => {
        setShowPassword(e.target.checked);
    };

    return (
        <Box className='login-container'>
            <form className='login' onSubmit={handleSubmit}>
                <Container maxWidth="xs">
                    <Box textAlign="center" marginBottom={2}>
                        <Typography variant="h5" gutterBottom>
                            Login
                        </Typography>
                        <Typography variant="subtitle1">
                            Use your Google Account
                        </Typography>
                    </Box>

                    {alert && (
                        <Box marginBottom={2}>
                            {alert}
                        </Box>
                    )}

                    <TextField
                        type='email'
                        label="Email or phone"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="email"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value })}
                    />

                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="password"
                        value={userDetails.password}
                        onChange={(e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value })}
                        InputProps={{
                            endAdornment: (
                                <Box display="flex" alignItems="center">

                                </Box>
                            )
                        }}
                    />

                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={showPassword}
                                    onChange={handleShowPasswordChange}
                                />
                            }
                            label="Show password"
                        />
                        <Link href="#" variant="body2">
                            Forgot Password?
                        </Link>
                    </Box>

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>

                    <Box textAlign="center" marginTop={2}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">
                                Create account
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </form>
        </Box>
    );
}

export default Login;
