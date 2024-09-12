import axios from 'axios';

const baseUrl = "http://localhost:3000/api/v1/note"
const token = localStorage.getItem("token")
const headers = { headers: { 'Authorization': 'bearer ' + token } }

export const allnote = async () => {

    const res = axios.get(baseUrl, headers);
    console.log(res);
    return res;

}

export const createNote = async (data) => {
    console.log(data)


    const res = await axios.post(baseUrl, data, headers);
    console.log(res);
    return res


}


export const archiveNote = async (id) => {


    const url = `${baseUrl}/${id}/archived`;
    const res = await axios.post(url, null, headers);
    return res;

}


export const trashNote = async (id) => {
    if (id) {


        const url = `${baseUrl}/${id}/trash`;
        const res = await axios.post(url, null, headers);
        return res;


    } else {
        console.log("id not found=====>")
    }
}
export const findNote = async (id) => {
    if (id) {

        const url = `${baseUrl}/${id}`;
        const res = await axios.get(url, headers);
        return res;
    }
}

export const editNote = async (id, data) => {

    if (!id) {
        console.log("id not found=====>");
        return null;
    }

    if (!data) {
        console.log("No data provided to edit the note=====>");
        return null;
    }

    if (id && data) {


        const url = `${baseUrl}/${id}`;
        const res = await axios.put(url, data, headers);
        return res;

    } else {
        console.log("id not found=====>")
    }

}


export const colorChange = async (id, color) => {

    console.log("hello in color api")

    if (id) {

        const url = `${baseUrl}/${id}/color`;
        const res = await axios.patch(url, { color }, headers)

        return res;

    }
    else {
        console.log("Id note Found")
    }

}



export const deleteNote = async (id) => {
    if (id) {

        console.log("id in service========>", id)
        const token = localStorage.getItem('token');
        const headers = { headers: { 'Authorization': 'bearer ' + token } }
        console.log("hearders======>", headers)
        const url = `${baseUrl}/${id}`;
        const res = await axios.delete(url, headers);
        return res;

    } else {
        console.log("id not found=====>")
    }
}