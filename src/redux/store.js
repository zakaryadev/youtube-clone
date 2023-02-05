import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
import video from "./slices/videoSlice";
export const store = configureStore({
  reducer: {
    search,
    video,
  },
});
