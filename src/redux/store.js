import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    search,
  },
});
