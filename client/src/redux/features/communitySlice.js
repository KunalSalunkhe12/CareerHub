import { createSlice } from "@reduxjs/toolkit";

export const communitySlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    fetchAll: (state, action) => {
      state.posts = action.payload;
    },
    createPosts: (state, action) => {
      state.posts.push(action.payload); 
    },
  },
});

export const { fetchAll, createPosts } = communitySlice.actions;
export default communitySlice.reducer;
