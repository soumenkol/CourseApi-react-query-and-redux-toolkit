import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint"

export const blogDetails=async(id)=>{
    try {
        const url=`${endpoint.cms.blogdetails}/${id}`
        let response=await axiosInstance.get(url)
        return response.data.data
        
    } catch (error) {
        console.log(error);
        
    }
}