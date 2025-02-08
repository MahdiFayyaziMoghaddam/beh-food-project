import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiRequest;