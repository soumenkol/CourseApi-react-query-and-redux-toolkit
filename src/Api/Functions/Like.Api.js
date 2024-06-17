import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const likeapi=async(id)=>{
    try {
        const url=`${endpoint.cms.like}/${id}`
        const response=await axiosInstance.put(url);
        return response.data.likes
        
    } catch (error) {
        console.log(error);
        
    }
}