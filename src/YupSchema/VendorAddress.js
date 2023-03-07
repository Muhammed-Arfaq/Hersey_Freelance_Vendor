import * as yup from 'yup'

const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const addr = /^[\w\s,'-]+,\s[\w\s,'-]+,\s[\w\s,'-]+$/;

export const VendorAddress = yup.object().shape({
    country: yup.string().matches(regex, 'Country is not valid').required('country is required'),
    currentAddress: yup.string().matches(addr, 'Address is not valid').required('currentAddress is required'),
    city: yup.string().matches(regex, 'City is not valid').required('city is required'),
    state: yup.string().matches(regex, 'State is not valid').required('state is required'),
    pincode: yup.string().matches(/^[0-9]{6}$/, 'Zip / Postal code is not valid').required('pincode is required'),
}) 