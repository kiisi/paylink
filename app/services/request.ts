// lib/apiClient.ts

import axios from "axios";
import { tokenStore } from "./token-store";

const baseUrl = "https://paylinkbackend.onrender.com/api/v1";

export const request = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // needed for refresh cookie
});

// request.interceptors.request.use((config) => {
//   const token = tokenStore.getAccessToken();

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// request.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry
//     ) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         }).then((token) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           return request(originalRequest);
//         });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const response = await axios.post(
//           `${baseUrl}/auth/refresh`,
//           {},
//           { withCredentials: true }
//         );

//         const newAccessToken = response.data.accessToken;

//         tokenStore.setAccessToken(newAccessToken);

//         processQueue(null, newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return request(originalRequest);
//       } catch (refreshError) {
//         processQueue(refreshError, null);

//         tokenStore.setAccessToken(null);

//         // Optional: redirect to login
//         window.location.href = "/login";

//         return Promise.reject(refreshError);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );