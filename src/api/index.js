import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyA4XIIhZ6FGg3CpB7vED8kBQHeqnG1eIUE",
  },
});

export { instance };
