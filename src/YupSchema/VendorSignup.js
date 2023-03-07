import * as yup from 'yup'

const phoneRegExp = /^[6-9]\d{9}$/;
const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const vendorSignup = yup.object().shape({
    fullName: yup.string().min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be at most 50 characters')
    .matches(regex, 'Full Name is not valid').required('FullName is required'),
    userName: yup.string().matches(regex, 'User Name is not valid').required('User Name is required'),
    gender: yup.string().matches(regex, 'Gender is not valid').required('Gender is required'),
    dob: yup.date().min(new Date('1950-01-01'), 'Date of birth must be after 1950').max(new Date(), 'Date of birth must be before today').required('Date of birth is required'),
    email: yup.string().email('Invalid Email').required('Email is required'),
    phone:  yup.string().matches(phoneRegExp, "Phone number is not valid"),
    password: yup.string().min(8, 'Password must be at least 8 characters').max(20, 'Password should only contain 20 characters').required('Password is required'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm your password'),
}) 