import * as yup from 'yup'

export const  contactValidationSchema = yup.object().shape({
    firstname: yup
    .string()
    .required('First Name is Required'),
    lastname: yup
    .string()
    .required('Last Name is Required'),
    email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
    phonenumber: yup
    .string()
    .required('Phone Number is Required'),
  billingaddress: yup
    .string()
    .required('Billing Address is Required'),
  mailaddress: yup
    .string()
    .required('Mail Address is required'),
})