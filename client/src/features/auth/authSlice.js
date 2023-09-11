import {createSlice} from "@reduxjs/toolkit"
export const authSlice = createSlice({
    name:'auth',
    initialState:{
        userInfo:null
    },
    reducers:{
        setCredentials:(state,action)=>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logOut:(state)=>{
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})
export const {setCredentials,logOut} = authSlice.actions
export default authSlice.reducer