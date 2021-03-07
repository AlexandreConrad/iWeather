import axios from "axios";

const url = `http://api.mediastack.com/v1/news?access_key=${process.env.actuKey}&countries=fr`;

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});