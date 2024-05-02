import * as yup from "yup";

const updatePassword = yup.object().shape({
    currentPassword: yup.string().min(8).max(25).required('enter current password'),
    newPassword: yup.string().min(8).max(25).required('enter new password'),
    confirmPassword: yup.string().min(8).max(25).required('password is required'),
});

export default updatePassword;