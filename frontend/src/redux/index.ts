import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
    reducer: {
        user,
        sidebar: sidebarReducer,
    }
})

export default store