import axios from "axios";
const REACT_APP_BASE_URL = "https://www.googleapis.com/youtube/v3/";
// const API_KEY = "AIzaSyDgCyDH2kKphNp-hrSN4mg1s5trGy9JT7w";
const API_KEY = "AIzaSyA4XIIhZ6FGg3CpB7vED8kBQHeqnG1eIUE";

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  params: {
    key: API_KEY,
  },
});

export { instance };
