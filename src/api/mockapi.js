import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
//import { AsyncStorage } from "react-native";
const instance = axios.create({
  baseURL: "https://62004c11fdf5090017249489.mockapi.io/api/getdata",
});

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export default instance;
