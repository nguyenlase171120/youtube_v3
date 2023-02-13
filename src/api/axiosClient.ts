import axios from "axios";
import { videoConfig } from "../config";

const axiosClient = axios.create({
  baseURL: videoConfig.baseUrl,
  headers: {
    "X-RapidAPI-Key": videoConfig.apiKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log(error);
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
