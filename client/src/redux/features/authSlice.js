import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userInfo: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('Profile', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userInfo = null
            localStorage.removeItem('Profile')
        }
    }
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer