import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/index";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async (q) => {
  const options = {
    params: {
      maxResults: 100,
      resultsPerPage: 100,
      part: "snippet,id",
      q: q,
      // pageToken: "CDIQAA",
    },
  };
  const { data } = await instance.get("search", options);

  return data;
});

const initialState = {
  searchValue: "",
  list: [],
  status: "loading",
  channelStatus: "loading",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.list = [];
    },
    setList: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.status = "loading";
      state.list = [];
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = "success";
      state.list = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = "error";
      state.list = [];
    });
  },
});

export const { setSearchValue, setList } = searchSlice.actions;

export default searchSlice.reducer;
