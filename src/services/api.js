import axios from "axios";

const api = axios.create({
  baseURL: "https://cristianobv-original-o.herokuapp.com/",
});

export default api;
