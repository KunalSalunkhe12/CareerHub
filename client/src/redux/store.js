import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice"
import jobStatusReducer from "./features/jobStatusSlice"
import communityReducer from "./features/communitySlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        jobStatus: jobStatusReducer,
        community: communityReducer
    },
})

export default store;