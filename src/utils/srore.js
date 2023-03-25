import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blog.slice";

export default configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
