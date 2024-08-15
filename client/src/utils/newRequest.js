import axios from "axios";

// url="http://localhost:8800";

const newRequest = axios.create({
  baseURL: "https://fiver-full-stack-backend.onrender.com",
  // baseURL: `${url}/api/`,
  withCredentials: true,
});

export default newRequest;
