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
export const findNote = async (id) => {
    if (id) {
        const token = localStorage.getItem('token');
        const headers = { headers: { 'Authorization': 'bearer ' + token } };
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
        try {
            const token = localStorage.getItem('token');

            const headers = { headers: { 'Authorization': 'bearer ' + token } };
            const url = `${baseUrl}/${id}`;
            const res = await axios.put(url, data, headers);
            return res;
        } catch (error) {
            console.log("error in editing the note=========> innservice", error)
        }
    } else {
        console.log("id not found=====>")
    }

}




export const deleteNote = async (id) => {
    if (id) {
        try {
            console.log("id in service========>", id)
            const token = localStorage.getItem('token');
            const headers = { headers: { 'Authorization': 'bearer ' + token } }
            console.log("hearders======>", headers)
            const url = `${baseUrl}/${id}`;
            const res = await axios.delete(url, headers);
            return res;
        } catch (error) {
            console.log("error in delte note in service========>", error)
        }
    } else {
        console.log("id not found=====>")
    }
}