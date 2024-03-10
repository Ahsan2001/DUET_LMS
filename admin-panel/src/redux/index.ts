import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice.jsx";

const store = configureStore({
    reducer: {user}
})

export default store