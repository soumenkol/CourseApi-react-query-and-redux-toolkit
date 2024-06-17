import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const contactApi = async (formData) => {
  try {
    const response = await axiosInstance.post(endpoint.cms.contact, formData);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};