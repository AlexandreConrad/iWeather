import React from "react"
import axios from "axios"

const url_end = `&units=metric&lang=fr&appid=${process.env.weatherKey}`;
const url = "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callWeatherMapAPI(endpoint) {
    return await callAPI.get(endpoint + url_end)
        .then(result => {
            return result
        }).catch(() => {
            return {
                error: true
            }
        })
}

export async function weatherSearchByCity(cityName, stateCode, country) {
    return await callWeatherMapAPI(`/find?q=${cityName},${stateCode},${country}`)
}