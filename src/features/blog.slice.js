import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogsData: (state, { payload }) => {
      state.blogs = payload;
    },
    deleteData: (state, { payload }) => {
      console.log(payload);
      state.blogs = state.blogs.filter((blog) => blog.id != payload);
    },
  },
});
export const { setBlogsData, deleteData } = blogSlice.actions;
export default blogSlice.reducer;
