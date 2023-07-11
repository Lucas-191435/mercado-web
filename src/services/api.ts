import axios from "axios";
import Cookies from "universal-cookie";

export const api = axios.create({
  baseURL: "http://localhost:3333",
})


// api.interceptors.request.use(
//   (config) => {
//     const token = cookie.get("@boxflow.token");
//     if (token) {
//       config.headers!["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       if (error.response?.data?.error?.name === "ExpiredJwtToken") {
//         const refreshToken = cookie.get("@boxflow.refreshToken");
//         const originalConfig = error.config;

//         if (!isRefreshingToken) {
//           isRefreshingToken = true;

//           api
//             .post("/api/auth/refresh", {
//               refreshToken,
//             })
//             .then((response) => {
//               const { token, refreshToken } = response.data.token;

//               cookie.set("@boxflow.token", token, {
//                 maxAge: 60 * 60 * 24 * 30,
//                 path: "/",
//               });

//               cookie.set("@boxflow.refreshToken", refreshToken, {
//                 maxAge: 60 * 60 * 24 * 30,
//                 path: "/",
//               });
//               api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//               failedRequestsQueue.forEach((request) =>
//                 request.onSuccess(token)
//               );
//               failedRequestsQueue = [];
//             })
//             .catch((err) => {
//               failedRequestsQueue.forEach((request) => request.onFailure(err));
//               failedRequestsQueue = [];
//             })
//             .finally(() => {
//               isRefreshingToken = false;
//             });
//         }

//         return new Promise((resolve, reject) => {
//           failedRequestsQueue.push({
//             onSuccess: (token: string) => {
//               originalConfig.headers?.Authorization &&
//                 (originalConfig.headers.Authorization = `Bearer ${token}`);
//               resolve(api(originalConfig));
//             },
//             onFailure: (error: AxiosError) => {
//               reject(error);
//             },
//           });
//         });
//       } else {
//         cookie.remove("@boxflow.token");
//         cookie.remove("@boxflow.refreshToken");
//         history.push("/login");
//       }
//     }

//     return Promise.reject(error);
//   }
// );
