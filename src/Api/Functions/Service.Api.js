import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const ServiceApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.service);
    return response?.data.data;
    
  } catch (error) {
    console.log("Contact Form error", error);
  }
};