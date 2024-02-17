import axios from "axios";

const URL_server = "http://localhost:3001";

const api = axios.create({
    baseURL: URL_server,
});

export default api;
