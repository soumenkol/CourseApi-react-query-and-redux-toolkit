import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const TestimonialApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.testimonial);
    return response?.data.testimonials;
    
  } catch (error) {
    console.log("Contact Form error", error);
  }
};