import axios from "axios";
axios.defaults.baseURL = 'https://629b1c36e67470ca4dec847a.endapi.io/users_list/'

function getUserFromServer(key) {
    return axios.get(`${key}`)
}

function fetchUsers() {
    return axios.get();
}

function addToServer(data) {
    return axios.post(``,data)
}

function editInServer(key, data) {
    return axios.put(`${key}`, data);
}

function deleteFromServer(key) {
    return axios.delete(`${key}`)
}

export { fetchUsers, addToServer, deleteFromServer, getUserFromServer, editInServer }