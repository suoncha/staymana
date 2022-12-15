import {API_URL} from "../utils";
import axios from 'axios'
import * as Cache from './Cache';

export const getUserInfo = async (data) => {
    const PATH = API_URL + '/users/' + data.tel + "/" + data.role;
    let token;
    await Cache.get('ACCESS_TOKEN').then(res => token = res.slice(1, -1));
    const res = await axios({
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        url: PATH,
    })
    return res
}

export const getHouseList = async (data) => {
    const PATH = API_URL + '/house/' + data.hostId;
    let token;
    await Cache.get('ACCESS_TOKEN').then(res => token = res.slice(1, -1));
    const res = await axios({
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        url: PATH,
    })
    return res
}