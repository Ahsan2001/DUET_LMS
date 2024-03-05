import * as yup from "yup";

const SignInSchema = yup.object().shape({
    email: yup.string().email("enter a valid email").required("email is required"),
    password: yup.string().min(8).max(25).required('password is required'),
    
});

export default SignInSchema;