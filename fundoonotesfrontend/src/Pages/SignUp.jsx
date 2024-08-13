import React from 'react'
import '../Style/signUp.css';
import google from '../Assests/signupPhoto.webp'
import { Container, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

export default function signup() {
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
                                />

                                <TextField
                                    type='text'
                                    label="Last Name"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                />

                                <TextField
                                    type='email'
                                    label="Email"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    helperText="You can use letters, numbers & periods"
                                />

                                <TextField

                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                    helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                                />

                                <TextField

                                    label="Confirm"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    required
                                />





                                <Button type="submit" variant="contained" color="primary">
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
