import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const updateApi = async (data) => {
  try {
    const response = await axiosInstance.post(endpoint.auth.update, data);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};