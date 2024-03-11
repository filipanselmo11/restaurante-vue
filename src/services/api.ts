import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    // headers: {
    //     'Authorization': 'Access-Control-Allow-Origin',
    //     'Content-Type': 'application/json'
    // }
});