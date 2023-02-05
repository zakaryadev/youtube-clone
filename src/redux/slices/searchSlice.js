import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_APP_BASE_URL, API_KEY } from "../../api/index";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async () => {
  const options = {
    params: {
      part: "snippet,id",
      maxResults: 250,
      key: API_KEY,
      q: "Iron+man",
      regionCode: "RU",
      resultsPerPage: 250,
      // pageToken: "CDIQAA",
    },
  };
  const { data } = await axios.get(REACT_APP_BASE_URL + "search", options);

  return data;
});

export const fetchChannel = createAsyncThunk(
  "search/fetchChannel",
  async (id) => {
    const options = {
      params: {
        part: "snippet,contentDetails,statistics",
        key: API_KEY,
        id: id,
      },
    };
    const data = await axios.get(REACT_APP_BASE_URL + "channels", options);

    return data.data.items[0].snippet.thumbnails.high.url;
  }
);

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
    builder.addCase(fetchChannel.pending, (state, action) => {
      state.channelStatus = "loading";
    });
    builder.addCase(fetchChannel.fulfilled, (state, action) => {
      state.channelStatus = "success";
    });
    builder.addCase(fetchChannel.rejected, (state, action) => {
      state.channelStatus = "error";
    });
  },
});

export const { setSearchValue, setList } = searchSlice.actions;

export default searchSlice.reducer;
