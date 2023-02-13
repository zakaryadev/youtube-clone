import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    // key: "AIzaSyAVMQs9ho7Qj530-3uqbHgMejEI9YYXVx8",
    key: "AIzaSyCIs8lXSs3fVqrONShfnTRC9z1IyMLTnl0",
  },
});

export { instance };
