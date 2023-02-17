import axios from "../axios";

export const login = (data) => axios.post("/vendor/login", data )

export const gigData = (data, token) => axios.post("/vendor/newGig", data, { headers: { Authorization: `Bearer ${token}` } } )

export const gigsCategory = (token) => axios.get("/vendor/categories", { headers: { Authorization: `Bearer ${token}` } })

export const connections = (vendorId, token) => axios.get(`/vendor/getConnections/${vendorId}`, { headers: { Authorization: `Bearer ${token}` } })

export const sndMsg = (data, token) => axios.post('http://localhost:3500/chat', data, { headers: { Authorization: `Bearer ${token}` } })

export const fetchMsg = (vendorId, userId, token) => axios.get(`http://localhost:3500/getMessage/${vendorId}/${userId}`, {  headers: { Authorization: `Bearer ${token}` }});