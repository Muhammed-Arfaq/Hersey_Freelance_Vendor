import * as yup from 'yup'

const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const VendorAddress = yup.object().shape({
    country: yup.string().matches(regex, 'Country is not valid').required('country is required'),
    currentAddress: yup.string().matches(regex, 'Address is not valid').required('currentAddress is required'),
    city: yup.string().matches(regex, 'City is not valid').required('city is required'),
    state: yup.string().matches(regex, 'State is not valid').required('state is required'),
    pincode: yup.string().matches(regex, 'Zip / Postal code is not valid').required('pincode is required'),
}) 