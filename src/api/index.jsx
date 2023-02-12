import axios from "../axios";

export const login = (data) => axios.post("/vendor/login", data )

export const gigData = (data) => axios.post("/vendor/newGig", data )

export const gigsCategory = () => axios.get("/vendor/categories")