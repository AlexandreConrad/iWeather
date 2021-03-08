import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});