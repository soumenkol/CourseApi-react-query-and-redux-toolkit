import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const TeamApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.team);
    return response?.data.TeamMember;
    
  } catch (error) {
    console.log("Contact Form error", error);
  }
};