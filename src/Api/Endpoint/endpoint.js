export const endpoint = {
    auth: {
      register: "/api/register",
      update: "/api/update-password"
    },
    cms:{
      course: "/api/course",
      service: "/api/service",
      banner:  "/api/banner",
      testimonial:"/api/testimonial",
      team: "/api/team",
      contact: "/api/contact/create",
      allblog:"/api/allBlog",
      showallcategory:"/api/showallcategory",
      catagorywisepost:"/api/category/post",
      letestpost:"/api/letest-post",
      blogdetails:"/api/blogdetails",
      commentShow:"/api/comment",
      like: "/api/blog/like",
      dislike:"/api/blog/unlike"
    }
}
  
  export const sucessNotificationEndPoints = [
    // endpoints.auth.signup,
    endpoint.auth.register,
    endpoint.auth.update,
    endpoint.cms.course,
    endpoint.cms.service,
    endpoint.cms.banner,
    endpoint.cms.testimonial,
    endpoint.cms.team,
    endpoint.cms.contact,
    endpoint.cms.allblog,
    endpoint.cms.showallcategory,
    endpoint.cms.letestpost,
    endpoint.cms.blogdetails,
    endpoint.cms.commentShow,
    endpoint.cms.like,
    endpoint.cms.dislike
  ];