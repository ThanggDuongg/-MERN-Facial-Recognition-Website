import axios from "axios";
import queryString from "query-string";
import Cookies from "universal-cookie";
import { parse, stringify } from 'qs';
import userApi from "./userApi";
import store from "../app/store";
import { login, logout } from "../app/userSlice";
import { logoutstatus } from "../app/statusLoginSlice";

const current = new Date();
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const cookies = new Cookies();
const axiosClient = axios.create({
  //config credentials
  // withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //use queryString handle parameter
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
  // paramsSerializer: params => queryString.stringify(params),
});

// axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  // var authToken = localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")) : null;
  var authToken = cookies.get("authToken") ? cookies.get("authToken") : null;
  if (
    config.url !== process.env.REACT_APP_API_STOREIMAGE &&
    authToken !== null
  ) {
    var accessToken = authToken.accessToken;
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401 && !config._retry) {
      config._retry = true;
      try {
        var authToken = cookies.get("accessToken")
          ? cookies.get("accessToken")
          : null;
        const refreshing_token = localStorage.getItem('refreshToken')
        const response = await userApi.refreshToken({ token: refreshing_token });
        cookies.remove('accessToken', { path: '/' })
        cookies.set("accessToken", response.data.accessToken, {
          path: '/',
          expires: nextYear,
        });
        store.dispatch(login({ accessToken: response.data.accessToken, refreshToken: refreshing_token }))
      } catch (error) {
        store.dispatch(logout());
        store.dispatch(logoutstatus())
        cookies.remove("accessToken", {
          path: '/',
          maxAge: 0,
        });
        cookies.remove("role", {
          path: '/',
          maxAge: 0,
        });
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('email')
        localStorage.removeItem('fullname')
        localStorage.removeItem('image')
        localStorage.removeItem('id')
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
