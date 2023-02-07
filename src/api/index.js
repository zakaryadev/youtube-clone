import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "14788c386cmsh641ead1665cfb4cp1f8c58jsne3d924249208",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export { instance };
