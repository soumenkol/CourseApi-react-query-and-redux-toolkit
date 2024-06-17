import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const showComment=async(id)=>{
    try {
        const url=`${endpoint.cms.commentShow}/${id}`
        const response=await axiosInstance.get(url)
        return response.data.post.comment.comments
        
    } catch (error) {
        console.log(error);
        
    }
}