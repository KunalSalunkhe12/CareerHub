import { createSlice } from "@reduxjs/toolkit"

export const communitySlice = createSlice({
    name: "posts",
    initialState: {
        posts:[]
    },
    reducers: {
       fetchAll: (state)=>{
          
       },
       createPost: (state)=>{

       }
    }
})

export const { fetchAll, createPost } = communitySlice.actions
export default communitySlice.reducer