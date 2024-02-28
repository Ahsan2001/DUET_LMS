import * as yup from "yup";

const SignUpSchema = yup.object().shape({
    first_name: yup.string().min(3).max(30).required("first name is required"),
    last_name: yup.string().min(3).max(30).required("last name is required"),
    email: yup.string().email("enter a valid email").required("email is required"),
    phone: yup.string().min(11).required("enter a valid phone number"),
    rollNo: yup.string().min(2).max(20).required("enter your roll number"),
    dept: yup.string().min(4).max(35).required("enter you department"),
    gender: yup.string().oneOf(["male", "female"]).required("select Gender"),
    address: yup.string().min(8).max(45).required("address is required"),
    picture: yup.string(),
    password: yup.string().min(8).max(25).required("password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "passwords must match").required("confirm password is required"),
});

export default SignUpSchema;