import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async () => {
  const options = {
    params: {
      part: "snippet,id",
      maxResults: 50,
      key: "AIzaSyBuD9JBIG_hD1_76ggb_9opWbBOUnFBAqs",
      q: "Iron+man",
      regionCode: "RU",
      resultsPerPage: 250,
    },
  };
  const data = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    options
  );

  return data;
});

// export const fetchChannel = createAsyncThunk("search/fetchVideos", async () => {
//   const options = {
//     params: {
//       part: "snippet,id",
//       maxResults: 50,
//       key: "AIzaSyBuD9JBIG_hD1_76ggb_9opWbBOUnFBAqs",
//       q: "Iron+man",
//       regionCode: "RU",
//       resultsPerPage: 250,
//     },
//   };
//   const data = await axios.get(
//     "https://www.googleapis.com/youtube/v3/search",
//     options
//   );

//   return data;
// });

const initialState = {
  searchValue: "",
  list: [],
  status: "loading",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setList: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: {
    [fetchVideos.pending](state) {
      state.status = "loading";
      state.list = [];
    },
    [fetchVideos.fulfilled](state, action) {
      state.status = "success";
      state.list = action.payload.data;
    },
    [fetchVideos.rejected](state) {
      state.status = "error";
      state.list = [];
    },
  },
});

export const { setSearchValue, setList } = searchSlice.actions;

export default searchSlice.reducer;
