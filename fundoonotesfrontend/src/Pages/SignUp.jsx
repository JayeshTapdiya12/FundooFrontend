import { useState } from 'react'
import '../Style/signUp.css';
import google from '../Assests/signupPhoto.webp'
import { Container, TextField, Button, Typography } from '@mui/material';
import { signup } from '../Services/UserService';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

export default function SignUp() {

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
    })


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
        setUserDetails(prevDetails => ({
            ...prevDetails,
            email: value
        }));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordErrors(validatePassword(value));
        setUserDetails(prevDetails => ({
            ...prevDetails,
            password: value
        }));
    };


    const send = async () => {
        console.log('object')
        if (userDetails.email === "" || userDetails.password === "" || userDetails.name === "" || userDetails.lname === "") {
            console.log("object=====>");
            <Alert severity="error">plz enter all the details.</Alert>
        } else {
            console.log("hello in side ")
            let res = await signup(userDetails);
            console.log(res?.data.data)
            console.log(userDetails)
        }
    }

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
            alert(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
        } else {
            alert("Password doesn't match");
        }

        // setUserDetails({
        //     ...userDetails,
        //     name: firstName,
        //     lname: lastName,
        //     // email: email,
        //     // password: password
        // })
        // console.log(userDetails, firstName, lastName)
        setUserDetails(prevDetails => ({
            ...prevDetails,
            name: firstName,
            lname: lastName,
        }));
        console.log(userDetails)




        send()

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
                                    // fullWidth
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    sx={{
                                        width: 200,
                                        maxWidth: '10vw',
                                    }}
                                />

                                <TextField
                                    type='text'
                                    label="Last Name"
                                    variant="standard"
                                    margin="normal"
                                    // fullWidth
                                    sx={{
                                        width: 200,
                                        maxWidth: '10vw',
                                        marginLeft: "10px"
                                    }}
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
                                    sx={{
                                        width: 200,
                                        maxWidth: '10vw',
                                    }}
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
                                    sx={{
                                        width: 200,
                                        maxWidth: '10vw',
                                        marginLeft: "10px"
                                    }}
                                    required
                                    value={cPassword}
                                    onChange={(e) => setCPassword(e.target.value)}
                                />
                                <br />
                                <Button type="submit" variant="contained" color="primary" onClick={submit}>
                                    SignUp
                                </Button>

                            </Container>
                        </form>
                        <Link to='/login'> <Button variant="text" color="primary" fullWidth>
                            Sign in
                        </Button></Link>
                    </div>
                    <div className="image">
                        <img src={google} alt="google img" className='google' />
                    </div>
                </div>
            </div>
        </>
    )
}