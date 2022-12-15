import {API_URL} from "../utils";
import axios from 'axios'
import * as Cache from './Cache';

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

export const createHouse = async (data) => {
    const PATH = API_URL + '/house';
    await Cache.get('ACCESS_TOKEN').then(res => token = res.slice(1, -1));
    const res = await axios({
        method: 'post', url: PATH, data: data,
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    return res.data
}

export const createRoom = async (data) => {
    const PATH = API_URL + '/room';
    await Cache.get('ACCESS_TOKEN').then(res => token = res.slice(1, -1));
    const res = await axios({
        method: 'post', url: PATH, data: data,
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
    return res.data
}