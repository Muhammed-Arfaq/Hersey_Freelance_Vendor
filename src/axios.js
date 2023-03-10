import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:3500/"

    baseURL: "https://www.herseymensformals.ml/"

    // baseURL: "http://13.233.255.36/"
})

export default instance