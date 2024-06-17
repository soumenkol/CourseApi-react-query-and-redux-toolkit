import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const BannerApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.banner);
    return response?.data.bannerdata;
    
  } catch (error) {
    console.log("Contact Form error", error);
  }
};