import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const disLikeapi = async (id) => {
  try {
    const url = `${endpoint.cms.dislike}/${id}`;
    const response = await axiosInstance.put(url);
    return response.data.unlikes;
  } catch (error) {
    console.log(error);
  }
};