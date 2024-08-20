import axios from 'axios';

const baseUrl = "http://localhost:3000/api/v1/note"

export const allnote = async () => {

    const token = localStorage.getItem("token")
    const headers = { headers: { 'Authorization': 'bearer ' + token } }

    const res = axios.get(baseUrl, headers);
    console.log(res);
    return res;

}
