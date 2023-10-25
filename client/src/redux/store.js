import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice"
import jobStatusReducer from "./features/jobStatusSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        jobStatus: jobStatusReducer
    },
})

export default store;