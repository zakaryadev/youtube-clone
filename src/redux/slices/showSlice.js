import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: true,
};

export const ShowSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDrawer(state, action) {
      // console.log(!state.drawer);
      state.drawer = action.payload;
    },
  },
});

export const { setDrawer } = ShowSlice.actions;

export default ShowSlice.reducer;
