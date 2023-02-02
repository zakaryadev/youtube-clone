import { configureStore } from "@reduxjs/toolkit";
import showSlice from "./slices/showSlice";

export const store = configureStore({
  reducer: {
    showSlice,
  },
});
