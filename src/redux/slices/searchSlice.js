import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/index";

export const fetchVideos = createAsyncThunk("search/fetchVideos", async (q) => {
  const token = localStorage.getItem("nextPageToken");
  const options = {
    params: {
      maxResults: 100,
      resultsPerPage: 100,
      part: "snippet,id",
      q: q,
    },
  };
  if (token && token !== undefined && token !== null) {
    const options = {
      params: {
        pageToken: token,
      },
    };
    const { data } = await instance.get("search", options);

    return data;
  } else {
    const { data } = await instance.get("search", options);
    return data;
  }
});

export const localStorageRemover = () => {
  localStorage.removeItem("nextPageToken");
};

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
      state.list = [];
    },
    setList: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.status = "loading";
      localStorageRemover();
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      localStorageRemover();
      state.status = "success";
      state.list = action.payload;
      localStorage.setItem("nextPageToken", action.payload.nextPageToken);
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = "error";
      state.list = [];
      localStorageRemover();
    });
  },
});

export const { setSearchValue, setList } = searchSlice.actions;

export default searchSlice.reducer;
