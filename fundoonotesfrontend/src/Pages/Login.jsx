import React, { useState } from 'react'
import Button from '@mui/material/Button';

function Login(props) {
    const { name, lchange } = props
    // const [lname, setLname]=useState()   
    const calling = () => {
        lchange("hello")
    }

    return (
        <>
            <h1>{name}</h1>

            <Button variant="contained" onClick={calling}>Last Name</Button>
            {/* {name === "jayesh" ? <p>hi jayesh</p> : <p>{lname}</p>} */}

        </>
    )
}

export default Login;