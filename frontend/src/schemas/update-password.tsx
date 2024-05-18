import * as yup from "yup";

const updatePasswordSchemas = yup.object().shape({
    currentPassword: yup.string().min(8).max(25).required('enter current password'),
    newPassword: yup.string().min(8).max(25).required('enter new password'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords must match').required('Confirm password is required'),
});

export default updatePasswordSchemas;