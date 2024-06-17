import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const loginApi = async (payload) => {
  try {
    const response = await axiosInstance.post(endpoint.auth.login, payload);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
