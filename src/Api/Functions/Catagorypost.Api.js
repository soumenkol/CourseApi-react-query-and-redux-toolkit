import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";



export const catagoryPost = async (id) => {
  try {
    const url=`${endpoint.cms.catagorywisepost}/${id}`
    const response=await axiosInstance.get(url)
    console.log(response.data.data);
    return response.data.data
    
  } catch (error) {
    console.log(error);
    
  }
 
};
