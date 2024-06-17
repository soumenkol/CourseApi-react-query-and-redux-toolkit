import axiosInstance from "../Axios/axiosInstance";
import { endpoint } from "../Endpoint/endpoint";

export const CourseApi = async () => {
  try {
    const response = await axiosInstance.get(endpoint.cms.course);
    return response?.data.Courses;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};