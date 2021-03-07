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

export const getMeteoIcon = code => {
    return "http://openweathermap.org/img/wn/" + code + "@2x.png"
};

export async function weatherSearchByCity(cityName, stateCode, country) {
    return await callWeatherMapAPI(`/find?q=${cityName},${stateCode},${country}`)
}

export async function weatherSerarchByCityId(cityId) {
    return await callWeatherMapAPI(`/weather?id=${cityId}`)
}

export async function weatherDetailCity(lat, lon) {
    return await callWeatherMapAPI(`/onecall?lat=${lat}&lon=${lon}`)
}