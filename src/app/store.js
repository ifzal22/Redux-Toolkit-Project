import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/counter/video/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
