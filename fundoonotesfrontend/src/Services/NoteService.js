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


export const archiveNote = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const headers = { headers: { 'Authorization': "bearer " + token } };
        const url = `${baseUrl}/${id}/archived`;
        const res = await axios.post(url, null, headers);
        return res;
    } catch (error) {
        console.error("Failed to archive note:", error);


    }
}


export const trashNote = async (id) => {
    if (id) {
        try {
            const token = localStorage.getItem("token");
            const headers = { headers: { 'Authorization': "bearer " + token } };
            const url = `${baseUrl}/${id}/trash`;
            const res = await axios.post(url, null, headers);
            return res;

        } catch (error) {
            console.log("error in the trash note=========>", error)
        }
    } else {
        console.log("id not found=====>")
    }
}


export const editNote = async (id, data) => {
    if (id) {
        try {
            const token = localStorage.getItem('token');
            const headers = { headers: { 'Authorization': 'bearer ' + token } };
            const url = `${baseUrl}/${id}`;
            const res = await axios.put(url, data, headers);
            return res;
        } catch (error) {
            console.log("error in editing the note=========>", error)
        }
    } else {
        console.log("id not found=====>")
    }

}