import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const showallcategoryApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.showallcategory);
    return response?.data.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};