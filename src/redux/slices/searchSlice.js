import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/index";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async (q) => {
  const token = localStorage.getItem("nextPageToken");

  if (token != undefined) {
    const options = {
      params: {
        maxResults: 100,
        resultsPerPage: 100,
        part: "snippet,id",
        q: q,
        pageToken: token,
      },
    };
    const { data } = await instance.get("search", options);

    return data;
  } else {
    const options = {
      params: {
        maxResults: 100,
        resultsPerPage: 100,
        part: "snippet,id",
        q: q,
      },
    };
    const { data } = await instance.get("search", options);

    return data;
  }
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
      localStorage.removeItem("nextPageToken");
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = "success";
      state.list = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = "error";
      state.list = [];
      localStorage.removeItem("nextPageToken");
    });
  },
});

export const { setSearchValue, setList } = searchSlice.actions;

export default searchSlice.reducer;
