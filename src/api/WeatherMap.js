/** Import React **/
import React from "react";

/** Import Axios pour le call API**/
import axios from "axios";

/** Import KEY API **/
import keyApi from '../api/KeyAPI';

/** Constante **/
const url_end =     `&units=metric&lang=fr&appid=${keyApi.weatherMap}`;
const url =         "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callWeatherMapAPI(endpoint) {
    try {
        const res = await callAPI.get(endpoint + url_end);
        return res;
    } catch (err) {
        console.log(err.message + "\nAPI conection failed");
    }
}

/** Call API avec l'ID de la ville **/
export async function getWeatherMapByID(id) {
    return await callWeatherMapAPI(`/weather?id=${id}`);
};

/** Call API avec le nom de la ville **/
export async function getWeatherMapName(cityName) {
    return await callWeatherMapAPI(`/find?q=${cityName}`);
};
