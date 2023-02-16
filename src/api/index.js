import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCFtbU22RX5RB8FW6HUQr--CxZvfg4J84Y",
  },
});

export { instance };
