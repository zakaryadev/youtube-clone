import { configureStore } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    search,
  },
});
