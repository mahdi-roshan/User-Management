import axios from "axios";

function fetchUsers() {
    return axios.get('https://629b1c36e67470ca4dec847a.endapi.io/users_list');
}


export { fetchUsers }