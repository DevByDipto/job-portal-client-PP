import axios from "axios";
import React from "react";
import { use } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import useAuth from "./useAuth";

const axiosSecureInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  axiosSecureInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interseptor
  axiosSecureInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        
      return response;
    },
    (err) => {
    //   console.log("err in interseptor", err);
      if (err) {
        console.log("error oker");
      }

      return Promise.reject(err);
    }
  );
  return axiosSecureInstance;
};

export default useAxiosSecure;
