import React from 'react'
import axios from 'axios'


export const login = () => {
    let data = {
        email: "test@gmail.com",
        password: "test1@123"
    }
    const baseUrl = "http://localhost:3000/api/v1/users/";
    let res = axios.post(baseUrl + 'login', data)
    console.log(res)
    return res
}
