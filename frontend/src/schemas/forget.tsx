import * as yup from "yup";

const ForgetSchema = yup.object().shape({
    email: yup.string().email("enter a valid email").required("email is required"),
    
});

export default ForgetSchema;