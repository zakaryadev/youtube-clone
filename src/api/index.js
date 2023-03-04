import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDgCyDH2kKphNp-hrSN4mg1s5trGy9JT7w",
  },
});

export { instance };
