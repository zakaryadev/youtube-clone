import axios from "axios";
const REACT_APP_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "AIzaSyBlGG_UbZjcfBy5j10PDXGmxYrZClXSrac";

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

// export const getData = () => {
//   return instance
//     .get(`?key=${API_KEY}&maxResults=10`)
//     .then((response) => console.log(response.data))
//     .catch((error) => {
//       throw error;
//     });
// };

export { instance, API_KEY };
