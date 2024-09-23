import axios from 'axios'
import { Navigate } from 'react-router-dom';

const baseUrl = "http://localhost:3000/api/v1/users/";

export const login = (value) => {
    let data = {
        email: value.email,
        password: value.password
    }
    // const baseUrl = "http://localhost:3000/api/v1/users/";

    let res = axios.post(baseUrl + 'login', data)
    return res
}

export const signup = (value) => {

    const data = {
        name: value.name,
        lname: value.lname,
        email: value.email,
        password: value.password
    }


    const res = axios.post(baseUrl + 'sign', data)
    return res;
}
