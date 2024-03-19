import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import sidebarReducer from "./slices/sidebarSlice";
// import courseIdReducer from "./slices/courseIdSlice";

const store = configureStore({
    reducer: {
        user,
        sidebar: sidebarReducer,
        // reduxCourseId: courseIdReducer,

    }
})

export default store