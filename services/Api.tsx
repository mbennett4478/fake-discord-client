import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export default api;
