import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/index";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async (q) => {
  const options = {
    params: {
      part: "snippet,id",
      maxResults: 250,
      q: q,
      regionCode: "US",
      resultsPerPage: 250,
    },
  };
  const { data } = await instance.get("search", options);

  return data;
});

export const fetchChannel = createAsyncThunk(
  "search/fetchChannel",
  async (id) => {
    const options = {
      params: {
        part: "snippet,contentDetails,statistics",
        id: id,
      },
    };
    const data = await instance.get("channels", options);

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
