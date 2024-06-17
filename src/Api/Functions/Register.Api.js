
import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const registerApi = async (formData) => {
  try {
    const response = await axiosInstance.post(endpoint.auth.register, formData);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};

