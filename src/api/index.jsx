import axios from "../axios";

const token = localStorage.getItem("jwt")
const config = { headers: { Authorization: `Bearer ${token}` } }

export const login = (data) => axios.post("/vendor/login", data)

export const vendorOtp = (fullName, userName, email, phone, gender, dob, password, passwordConfirm) => axios.post("/vendor/vendorOTP", {
    fullName,
    userName,
    email,
    phone,
    gender,
    dob,
    password,
    passwordConfirm
})

export const verifyVendorOTP = (otp) => axios.post("/vendor/verifyVendorOTP",{ otp })

export const gigData = (data) => axios.post("/vendor/newGig", data, config)

export const gigsCategory = () => axios.get("/vendor/categories", config)

export const connections = (vendorId) => axios.get(`/vendor/getConnections/${vendorId}`, config)

export const sndMsg = (data) => axios.post('/chat', data)

export const fetchMsg = (vendorId, userId) => axios.get(`/getMessage/${vendorId}/${userId}`);

export const getMsgCount = (vendorId) => axios.get(`/vendor/getVendorMessageCount/${vendorId}`)

export const getReservedGigs = () => axios.get("/vendor/bookedGigs", config)

export const getVendorDetails = () => axios.get("/vendor/vendorProfile", config)

export const updateAddress = ( country, currentAddress, city, state, pincode, vendorId) => axios.patch(`/vendor/addAddress/${vendorId}`, { country, currentAddress, city, state, pincode })

export const updatePersonalInfo = (skill, googleDrive, linkedIn, github, about, profilePhoto, vendorId) => axios.patch(`/vendor/addSkill/${vendorId}`, { skill, googleDrive, linkedIn, github, about, profilePhoto })

export const viewGig = () => axios.get("/vendor/viewGigs", config)

export const deleteGig = (gigId) => axios.delete(`/vendor/deleteGig/${gigId}`, config)

export const viewVendorRatings = () => axios.get("/vendor/viewVendorRating", config)

export const updateVendorProfile = (userName, dob, gender, phone, address, profilePhoto, upiId, skill, googleDrive, github, about, linkedIn, city, state, country) => axios.patch("/vendor/updateVendorProfile", { userName, dob, gender, phone, address, profilePhoto, upiId, skill, googleDrive, github, about, linkedIn, city, state, country }, config)

export const editGigData = (data) => axios.patch("/vendor/updateVendorGig", { data }, config)

export const cancelUserOrder = (orderId) => axios.patch("/vendor/cancelUserOrder", { orderId }, config)

export const completeUserOrder = (orderId) => axios.patch("/vendor/completeUserOrder", { orderId }, config)

export const vendorAuth = (vendorId, token) => axios.get(`/vendor/vendorAuth/${vendorId}`, { headers: { Authorization: `Bearer ${token}` }})