import { API_URL } from "../utils";
import axios from 'axios'

const data = {
    role: 0,
    tel: '12345678',
}

export function validateUser() {
    const PATH = API_URL + '/users/validate'
    axios({
        method: 'post',
        url: PATH,
        data: data,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}