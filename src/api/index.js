import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCpCXieQTYvRHuBQ2GKStbK3CItlTDEujU",
  },
});

export { instance };
