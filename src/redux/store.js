import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
import video from "./slices/videoSlice";
import history from "./slices/historySlice";

export const store = configureStore({
  reducer: {
    search,
    video,
    history,
  },
});
