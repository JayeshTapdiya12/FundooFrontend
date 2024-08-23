import axios from 'axios';

const baseUrl = "http://localhost:3000/api/v1/note"

export const allnote = async () => {

    const token = localStorage.getItem("token")
    const headers = { headers: { 'Authorization': 'bearer ' + token } }

    const res = axios.get(baseUrl, headers);
    console.log(res);
    return res;

}

export const createNote = async (data) => {
    console.log(data)
    // // const token = localStorage.getItem("token");
    // // const header = { headers: { 'Authorization': 'bearer ' + token } }
    // const res = axios.post(baseUrl, header, data);
    // console.log(res);
    // return res
    try {
        const token = localStorage.getItem("token");
        const header = { headers: { 'Authorization': 'bearer ' + token } }
        const res = await axios.post(baseUrl, data, header);
        console.log(res);
        return res

    } catch (error) {
        console.error("Error creating note:", error);
    }
}
