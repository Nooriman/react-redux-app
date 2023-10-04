import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice.js";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
