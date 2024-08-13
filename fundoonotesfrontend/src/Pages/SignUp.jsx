import { useState } from 'react'
import '../Style/signUp.css';
import google from '../Assests/signupPhoto.webp'
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

export default function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')


    const submit = () => {
        if (password === cPassword) {
            alert(firstName, lastName, email, password)
        } else {
            alert("password doesn't match")
        }
    }

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
                                    helperText="You can use letters, numbers & periods"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <TextField

                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
