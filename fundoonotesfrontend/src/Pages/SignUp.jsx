import { useState } from 'react'
import '../Style/signUp.css';
import google from '../Assests/signupPhoto.webp'
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

export default function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [passwordErrors, setPasswordErrors] = useState([]);

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
        if (!/(?=.[@$!%?&])/.test(password)) {
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

    const submit = (e) => {
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
            alert(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
        } else {
            alert("Password doesn't match");
        }
    };

    return (
        <>
            <div className="main">
                <div className="content">
                    <div className="form">
                        <form>
                            <Container maxWidth="xs">
                                <Typography variant="h5" align="center" gutterBottom>
                                    Create your Google Account
                                </Typography>

                                <TextField
                                    type='text'
                                    label="First Name"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                                <TextField
                                    type='text'
                                    label="Last Name"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />

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

                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    error={passwordErrors.length > 0}
                                    helperText={passwordErrors.join(', ')}
                                />

                                <TextField
                                    label="Confirm"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    value={cPassword}
                                    onChange={(e) => setCPassword(e.target.value)}
                                />

                                <Button type="submit" variant="contained" color="primary" onClick={submit}>
                                    Submit
                                </Button>

                            </Container>
                        </form>
                        <Button variant="text" color="primary" fullWidth>
                            Sign in instead
                        </Button>
                    </div>
                    <div className="image">
                        <img src={google} alt="google img" className='google' />
                    </div>
                </div>
            </div>
        </>
    )
}