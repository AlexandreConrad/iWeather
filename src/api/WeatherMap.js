import axios from "axios"

const url_end = `&units=metric&lang=fr&appid=7e13473339bde8e01be034edee1f08b2`;
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

/**
 * Récupération des images de la météo
 * @param code météo
 */
export const getMeteoIcon = code => {
    return "http://openweathermap.org/img/wn/" + code + "@2x.png"
};

/**
 * Permet de faire la recherche en rapport avec le nom, code ou pays
 */
export async function weatherSearchByCity(cityName, stateCode, country) {
    return await callWeatherMapAPI(`/find?q=${cityName},${stateCode},${country}`)
}

/**
 * Permet de faire une recherche par rapport à l'identifiant de la ville
 */
export async function weatherSerarchByCityId(cityId) {
    return await callWeatherMapAPI(`/weather?id=${cityId}`)
}

/**
 * Permet de récupérer toutes les informations en détail d'une ville
 */
export async function weatherDetailCity(lat, lon) {
    return await callWeatherMapAPI(`/onecall?lat=${lat}&lon=${lon}`)
}