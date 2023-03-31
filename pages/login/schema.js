import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup.string().required('Password is required'),
});
