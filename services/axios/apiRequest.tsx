import axios from "axios";

const apiRequest = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRequest;
