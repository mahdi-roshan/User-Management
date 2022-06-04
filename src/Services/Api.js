import axios from "axios";

function fetchUsers() {
    return axios.get('https://629b1c36e67470ca4dec847a.endapi.io/users_list');
}

function addToServer(data) {
    return axios.post('https://629b1c36e67470ca4dec847a.endapi.io/users_list', data)
}

function deleteFromServer(key) {
    return axios.delete(`https://629b1c36e67470ca4dec847a.endapi.io/users_list/${key}`)
}

export { fetchUsers, addToServer, deleteFromServer }