import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action) => {
      if (
        !state.history.some(
          (item) => item.id.videoId === action.payload.id.videoId
        )
      ) {
        state.history.push(action.payload);
      }
      localStorage.setItem("id-s", JSON.stringify(state.history));
    },
  },
});
export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
