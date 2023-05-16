import axios from "axios";

const BASE_URL = "http://209.38.229.169/";
const ACCESS_TOKEN = "token";
const REFRESH_TOKEN = "refreshToken";
const USER_TYPE = "userType";
const USER_NAME = "userName";
const PERMISSONS = "permissions";

let tokenRequest = axios.create({
  baseURL: BASE_URL,
  // timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

const loginUser = async (username, password) => {
  const loginBody = { username: username, password: password };

  try {
    const response = await tokenRequest.post(`api/account/login/`, loginBody);
    console.log(response);
    window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
    window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
    window.localStorage.setItem(USER_TYPE, response.data.user_type);
    window.localStorage.setItem(USER_NAME, response.data.username);
    window.localStorage.setItem(
      PERMISSONS,
      JSON.stringify(response.data.permissions)
    );
    return await Promise.resolve(response.data);
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
};

const refreshToken = async () => {
  const refreshBody = { refresh: window.localStorage.getItem(REFRESH_TOKEN) };
  try {
    const response = await tokenRequest.post(
      `api/account/login/refresh/`,
      refreshBody
    );
    console.log(response);
    window.localStorage.setItem(ACCESS_TOKEN, response.data.access);
    window.localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
};

const isCorrectRefreshError = (status) => {
  return status === 401;
};

const authRequest = axios.create({
  baseURL: BASE_URL,
  // timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

authRequest.interceptors.request.use(
  (request) => {
    const headerAuthorization = `Bearer ${window.localStorage.getItem(
      ACCESS_TOKEN
    )}`;
    request.headers.Authorization = headerAuthorization;
    return request;
  },
  (error) => {
    console.log({ error });
    if (error?.response?.status) {
      return error;
    }
  }
);

authRequest.interceptors.response.use(
  (response) => {
    return response;
  }, // this is for all successful requests.
  (error) => {
    //handle the request
    console.log(error.response);
    if (error?.response?.status) {
      return errorInterceptor(error);
    }
  }
);

const errorInterceptor = async (error) => {
  const originalRequest = error.config;
  const status = error?.response?.status;
  if (isCorrectRefreshError(status)) {
    try {
      await refreshToken();
      const headerAuthorization = `Bearer ${window.localStorage.getItem(
        ACCESS_TOKEN
      )}`;
      authRequest.defaults.headers["Authorization"] = headerAuthorization;
      originalRequest.headers["Authorization"] = headerAuthorization;
      return await authRequest(originalRequest);
    } catch (error_1) {
      return await Promise.reject(error_1);
    }
  }
  return Promise.reject(error);
};

const logoutUser = () => {
  authRequest
    .post(`api/account/logout/`, {
      refresh: window.localStorage.getItem(REFRESH_TOKEN),
    })
    .then((res) => {
      // console.log({res})
      window.localStorage.removeItem(ACCESS_TOKEN);
      window.localStorage.removeItem(REFRESH_TOKEN);
      window.localStorage.removeItem("superuser");
      window.localStorage.removeItem("variables");
      authRequest.defaults.headers["Authorization"] = "";
      window.location.href = "/login"; //
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export {
  tokenRequest,
  loginUser,
  logoutUser,
  refreshToken,
  errorInterceptor,
  authRequest,
  BASE_URL,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
};
