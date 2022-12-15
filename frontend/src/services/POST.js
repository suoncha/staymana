import {API_URL} from "../utils";
import axios from 'axios'

export const checkExist = async (data) => {
    const PATH = API_URL + '/users/check-exist'
    const res = await axios({
        method: 'post', url: PATH, data: data,
    })
    return res.data
}

export const signUp = async (data) => {
    const PATH = API_URL + '/users'
    const res = await axios({
        method: 'post', url: PATH, data: data,
    })
    return res.status
}

export const signIn = async (data) => {
    const PATH = API_URL + '/auth/login'
    const res = await axios({
        method: 'post', url: PATH, data: data,
    })
    return res.data
}

export const changePassword = async (data) => {
    const PATH = API_URL + '/users/change-password'
    const res = await axios({
        method: 'post', url: PATH, data: data,
    })
    return res.data
}