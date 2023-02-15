import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/index";

export const fetchVideo = createAsyncThunk(
  "search/fetchVideo",
  async (videoId) => {
    const options = {
      params: {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      },
    };
    const { data } = await instance.get("videos", options);

    return data.items[0];
  }
);

export const fetchRelationVideo = createAsyncThunk(
  "search/fetchRelationVideo",
  async (id) => {
    const options = {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        type: "video",
        maxResults: 50,
      },
    };
    const { data } = await instance.get("search", options);

    return data;
  }
);

const initialState = {
  video: [],
  status: "loading",
  relatedVideos: [],
};

export const searchSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state, action) => {
      state.video = [];
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.video = [];
    });
    builder.addCase(fetchRelationVideo.pending, (state, action) => {
      state.status = "loading";
      state.relatedVideos = [];
    });
    builder.addCase(fetchRelationVideo.fulfilled, (state, action) => {
      state.status = "success";
      state.relatedVideos = action.payload;
    });
    builder.addCase(fetchRelationVideo.rejected, (state, action) => {
      state.status = "error";
      state.relatedVideos = [];
    });
  },
});

export default searchSlice.reducer;
