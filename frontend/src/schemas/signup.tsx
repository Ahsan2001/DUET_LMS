import * as yup from "yup";

const SignUpSchema = yup.object().shape({

    first_name: yup.string().min(3).max(30).required("First name is required"),

    last_name: yup.string().min(3).max(30).required("Last name is required"),

    email: yup.string().email("Enter a valid email").required("Email is required"),

    phone: yup.number().required("Enter a valid phone number").positive().integer(),

    rollNo: yup.number().required("Enter your roll number").positive().integer(),

    gender: yup.string().oneOf(["male", "female"]).required("Select Gender"),

    address: yup.string().min(8).max(25).required("Address is required"),

    picture: yup.string(),

    password: yup.string().min(8).max(25).required("Password is required"),
  
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required"),

});

export default SignUpSchema;