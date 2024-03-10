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
        setUser: (state,action) => {
            const {user, auth} = action.payload;
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

        resetUser: (state) => {
            state._id = "";
            state.username = "";
            state.email = "";
            state.rollNo = "";
            state.department = "";
            state.gender = "";
            state.picture = "";
            state.phone = "";
            state.auth = false;
        },

    }
})


export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;