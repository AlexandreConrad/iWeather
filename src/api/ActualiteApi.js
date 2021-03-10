import axios from "axios";
import {resolve} from "react-native-svg/src/lib/resolve";

const url_end = `?access_key=5e928d3d5e09e600cfca0c0c750c5d32&countries=fr`;
const url = `http://api.mediastack.com/`;

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callActusAPI(endpoint) {
    return await callAPI.get(endpoint + url_end)
        .then(result => {
            return result
        }).catch(() => {
            return {
                error: true
            }
        })
}

/**
 * Récupération de la météo sur Mars
 */
export async function actusApi() {
    //TODO DELETE
    return new Promise((resolve,reject)=>{
        resolve({data:undefined})
    });
    //return await callActusAPI('v1/news');
}