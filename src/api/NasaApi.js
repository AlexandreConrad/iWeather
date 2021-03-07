import axios from "axios";

const url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.nasaKey}&feedtype=json&ver=1.0`;

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});