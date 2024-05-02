import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    _id: "",
    username: "",
    email: "",
    phone: "",
    picture: "",
    rollNo: "",
    department: "",
    gender: "",
    auth: false,
}


export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, auth } = action.payload;
            state._id = user._id;
            state.username = user.username;
            state.email = user.email;
            state.phone = user.phone;
            state.picture = user.picture;
            state.rollNo = user.rollNo;
            state.department = user.dept;
            state.gender = user.gender;
            state.auth = auth;
        },

        setUserImage: (state, action) => {
            const { user } = action.payload;
            console.log(user)
            state.picture = user.picture;
        },

        resetUser: (state) => {
            state._id = "";
            state.username = "";
            state.email = "";
            state.phone = "";
            state.picture = "";
            state.rollNo = "";
            state.department = "";
            state.gender = "";
            state.auth = false;
        },

    }
})


export const { setUser, resetUser,setUserImage } = userSlice.actions;

export default userSlice.reducer;