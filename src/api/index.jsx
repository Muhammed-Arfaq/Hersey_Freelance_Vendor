import axios from "../axios";

const token = localStorage.getItem("jwt")
const config = { headers: { Authorization: `Bearer ${token}` } }

export const login = (data) => axios.post("/vendor/login", data )

export const gigData = (data) => axios.post("/vendor/newGig", data, config )

export const gigsCategory = () => axios.get("/vendor/categories", config )

export const connections = (vendorId) => axios.get(`/vendor/getConnections/${vendorId}`, config )

export const sndMsg = (data) => axios.post('/chat', data )

export const fetchMsg = (vendorId, userId ) => axios.get(`/getMessage/${vendorId}/${userId}`);