import * as yup from 'yup'

const regex = /^[a-zA-Z]/;
const http = /^(http|https):/

export const VendorSkills = yup.object().shape({
    skill: yup.string().matches(regex, 'Skill is not valid').required('skill is required'),
    googleDrive: yup.string().matches(http, 'Google Drive link is not valid').required('googleDrive is required'),
    about: yup.string().matches(regex, 'About is not valid').required('about is required'),
}) 