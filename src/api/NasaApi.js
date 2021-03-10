import axios from "axios";

const url_end = `?api_key=q6jwlnGfbZBUZBeoQJdlmIFXFzmyALvpS7grVkD3&feedtype=json&ver=1.0`;
const url = `https://api.nasa.gov/`;

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callWeatherMarsAPI(endpoint) {
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
export async function weatherMars() {
    return await callWeatherMarsAPI('insight_weather/');
}