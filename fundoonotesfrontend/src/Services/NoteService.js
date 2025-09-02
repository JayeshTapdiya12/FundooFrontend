import axios from 'axios';

const baseUrl = "http://localhost:3000/api/v1/note"
const token = localStorage.getItem("token")
const headers = { headers: { 'Authorization': 'bearer ' + token } }

export const allnote = async () => {

    const url = `${baseUrl}/getallnotes`
    const res = axios.get(url, headers);

    return res;

}

export const createNote = async (data) => {


    const url = `${baseUrl}/addnote`
    const res = await axios.post(url, data, headers);
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

        const url = `${baseUrl}/${id}/getnote`;
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

        const url = `${baseUrl}/${id}`;
        const res = await axios.delete(url, headers);
        return res;

    } else {
        console.log("id not found=====>")
    }
}


// labels

export const getlabel = async () => {
    const url = `${baseUrl}/label`;
    const res = await axios.get(url, headers);
    return res;
}

// create label
export const addlabel = async (id, label) => {
    const url = `${baseUrl}/${id}/label`;
    const res = await axios.post(url, label, headers);
    return res;
}

// update label
export const updatelabel = async (id, label) => {
    const url = `${baseUrl}/${id}/updatelabel`;
    const res = await axios.post(url, label, headers);
    return res;
}
// delete label
export const deletelabel = async (id, label) => {
    const url = `${baseUrl}/${id}/deletelabel`;
    const res = await axios.delete(url, {
        data: { label },
        ...headers,
    });
    return res;
}


// collabaorators
// get collaborators
export const getcollabaorator = async (id) => {
    const url = `${baseUrl}/${id}/collaborators`;
    const res = await axios.get(url, headers);
    return res;
}

// add collaborators

export const addcollaborators = async (id, emailid) => {
    const url = `${baseUrl}/${id}/collaborators`;
    const res = await axios.post(url, emailid, headers);
    return res;
}
// delete collaborator
export const deletecollaborators = async (id, emailid) => {
    const url = `${baseUrl}/${id}/collaborators`;
    const res = await axios.delete(url, { data: { emailid: emailid }, ...headers });
    return res;
}


// reminder

// {
//   "date": "2025-08-29",
//   "time": "14:30:00",
//   "repeat": "weekly",
//   "repeat_custom": {
//     "daysOfWeek": [1, 3, 5],
//     "interval": 2,
//     "endDate": "2025-12-31"
//   }
// }

// get reminder
export const getreminder = async (id) => {
    const url = `${baseUrl}/${id}/reminder`;
    const res = await axios.get(url, headers);
    return res;
}
// add reminder
export const addreminder = async (id, reminder) => {
    const url = `${baseUrl}/${id}/reminder`;
    const res = await axios.post(url, reminder, headers);
    return res;
}

// delete reminder
export const deletereminder = async (id) => {
    const url = `${baseUrl}/${id}/reminder`;
    const res = await axios.delete(url, headers);
    return res;
}