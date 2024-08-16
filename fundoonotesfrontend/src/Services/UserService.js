import axios from 'axios'

const baseUrl = "http://localhost:3000/api/v1/users/";

export const login = (value) => {
    let data = {
        email: value.email,
        password: value.password
    }
    // const baseUrl = "http://localhost:3000/api/v1/users/";

    let res = axios.post(baseUrl + 'login', data)
    console.log(res)
    return res
}

export const signup = (value) => {

    const data = {
        name: value.name,
        lname: value.lname,
        email: value.email,
        password: value.password
    }
    // console.log(data, value)

    const res = axios.post(baseUrl + 'sign', data)
    console.log("signup succefully", res)
    return res;
}
