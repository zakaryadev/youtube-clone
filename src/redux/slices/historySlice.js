import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

export const historySlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem("id-s", state.history.toString());
    },
  },
});
export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
