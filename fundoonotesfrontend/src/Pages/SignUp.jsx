import { useState } from 'react';
import '../Style/signUp.css';
import google from '../Assests/signupPhoto.webp';
import { Container, TextField, Button, Typography, FormControlLabel, Checkbox, Box } from '@mui/material';
import { signup } from '../Services/UserService';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [passwordErrors, setPasswordErrors] = useState([]);

    const [userDetails, setUserDetails] = useState({
        name: "",
        lname: "",
        email: "",
        password: ""
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const errors = [];
        if (!/(?=.*[a-z])/.test(password)) {
            errors.push("Lowercase letter missing");
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            errors.push("Uppercase letter missing");
        }
        if (!/(?=.*\d)/.test(password)) {
            errors.push("Digit missing");
        }
        if (!/(?=.*[@$!%?&])/.test(password)) {
            errors.push("Special character missing");
        }
        if (!/.{8,}/.test(password)) {
            errors.push("Minimum 8 characters required");
        }
        return errors;
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordErrors(validatePassword(value));
    };

    const handleShowPasswordChange = (e) => {
        setShowPassword(e.target.checked);
    };

    const send = async () => {
        if (userDetails.email === "" || userDetails.password === "" || userDetails.name === "" || userDetails.lname === "") {
            alert("Please enter all the details.");
        } else {
            try {
                let res = await signup(userDetails);
                navigate('/login');
            } catch (error) {
                alert("Sign-up failed. Please try again.");
            }
        }
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!isEmailValid) {
            alert("Please enter a valid email address.");
            return;
        }

        if (passwordErrors.length > 0) {
            alert("Please correct the password errors.");
            return;
        }

        if (password === cPassword) {
            setUserDetails(prevDetails => ({
                ...prevDetails,
                name: firstName,
                lname: lastName,
                email: email,
                password: password
            }));
            send();
        } else {
            alert("Passwords don't match");
        }
    };

    return (
        <div className="main">
            <div className="content">
                <div className="form">
                    <form onSubmit={submit}>
                        <Container maxWidth="xs">
                            <Typography variant="h5" align="center" gutterBottom>
                                Create your Google Account
                            </Typography>

                            <Box className="field-group" display="flex" justifyContent="space-between" marginBottom={2}>
                                <TextField
                                    type='text'
                                    label="First Name"
                                    variant="standard"
                                    margin="normal"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <TextField
                                    type='text'
                                    label="Last Name"
                                    variant="standard"
                                    margin="normal"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Box>

                            <TextField
                                type='email'
                                label="Email"
                                variant="standard"
                                margin="normal"
                                fullWidth
                                required
                                value={email}
                                onChange={handleEmailChange}
                                error={!isEmailValid}
                                helperText={isEmailValid ? "You can use letters, numbers & periods" : "Invalid email address."}
                            />

                            <Box className="field-group" display="flex" justifyContent="space-between" marginBottom={2}>
                                <TextField
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    variant="standard"
                                    margin="normal"
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <TextField
                                    label="Confirm"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    required
                                    value={cPassword}
                                    onChange={(e) => setCPassword(e.target.value)}
                                />
                            </Box>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={showPassword}
                                        onChange={handleShowPasswordChange}
                                    />
                                }
                                label="Show password"
                                style={{ marginLeft: '10px' }}
                            />

                            <Button type="submit" variant="contained" color="primary">
                                Sign Up
                            </Button>

                            <Box textAlign="center" marginTop={2}>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <Button variant="text" color="primary">
                                        Sign in
                                    </Button>
                                </Link>
                            </Box>
                        </Container>
                    </form>
                </div>
                <div className="image">
                    <img src={google} alt="google img" className='google' />
                </div>
            </div>
        </div>
    );
}
