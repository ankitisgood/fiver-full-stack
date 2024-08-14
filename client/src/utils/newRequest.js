import axios from "axios";

// url="http://localhost:8800";

const newRequest = axios.create({
  baseURL: "http://localhost:8800",
  // baseURL: `${url}/api/`,
  withCredentials: true,
});

export default newRequest;