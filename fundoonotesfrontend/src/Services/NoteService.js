import axios from 'axios';

const baseUrl = "http://localhost:3000/api/v1/note/"

export const allnote = async () => {

    const token = localStorage.getItem("token")
    const headers = { 'Authorization': token }

    const res = axios.get(baseUrl, headers);
    console.log(res);
    return res;

}