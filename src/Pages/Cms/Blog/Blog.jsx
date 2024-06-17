// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { allBlogApi } from "../../../../src/Api/Functions/Allblog.Api";
// import { Box, Container, Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
// import { blog_pic } from "../../../../src/Api/Axios/axiosInstance";
// // import { showallcategoryApi } from "../../../../src/Api/Functions/showallcategory.Api";
// // import { catagoryPost } from "../../../../src/Api/Functions/Catagorypost.Api";
// // import { latestpostApi } from "../../../../src/Api/Functions/latestpost.Api";
// import { Link } from "react-router-dom";

// const Blog = () => {
//   // const [selectedCategory, setSelectedCategory] = useState(null);
//   // const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const { isPending, data: allBlogs } = useQuery({
//     queryKey: "allBlog",
//     queryFn: allBlogApi,
//   });
//    console.log(allBlogs)
//   const { data: categories } = useQuery({
//     queryKey: "category",
//     queryFn:  showallcategoryApi,
//   });
//   const { data: latestPosts } = useQuery({
//     queryKey: "latestPost",
//     queryFn: latestpostApi
//   });

//   // const onClickCategory = async (categoryId) => {
//   //   try {
//   //     setSelectedCategory(categoryId);
//   //     const filteredData = await catagoryPost(categoryId);
//   //     setFilteredBlogs(filteredData);
//   //   } catch (error) {
//   //     console.error("Error while fetching category posts:", error);
//   //   }
//   // };

//   const truncatedText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.substring(0, maxLength) + "....";
//     }
//     return text;
//   };
  
//   // const handlePost = (item) => {
//   //   setSelectedCategory(item._id);
//   //   setFilteredBlogs([item]);
//   // };
  
//   // const handleAll = () => {
//   //   setSelectedCategory(null);
//   //   setFilteredBlogs(allBlogs);
//   // };

//   return (
//     <Container maxWidth="xl">
//       <Grid container spacing={3}>
//         {/* <Grid item xs={12} sm={3}>
//           <Box>
//             <Typography variant="h6" align="center" gutterBottom>
//               Categories
//             </Typography>
//             <Button variant="text" color="primary" fullWidth onClick={handleAll}>
//               All
//             </Button>
//             {categories?.map((category) => (
//               <Button
//                 key={category._id}
//                 onClick={() => onClickCategory(category._id)}
//                 variant="text"
//                 color="primary"
//                 fullWidth
//               >
//                 {category.category}
//               </Button>
//             ))}
//           </Box>
//           <Box mt={4}>
//             <Typography variant="h6" align="center" gutterBottom>
//               Latest Posts
//             </Typography>
//             <Grid container spacing={2}>
//               {latestPosts?.map((post) => (
//                 <Grid item key={post._id} xs={12} sm={12}>
//                   <Box display="flex" alignItems="center">
//                     <img src={blog_pic(post._id)} alt="" height="100px" width="80px" />
//                     <Button onClick={() => handlePost(post)}>{post.title}</Button>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Grid> 
//         <Grid item xs={12} sm={9}>
//           <Grid container spacing={3}>
//             {allBlogs?.map((blog) => (
//               <Grid item key={blog._id} xs={12} md={12}>
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     height="550px"
//                     image={blog_pic(blog._id)}
//                     alt={blog.title}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" component="div" gutterBottom>
//                       {blog.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {truncatedText(blog.postText, 150)}
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary" component={Link} to={`/Blog/${blog._id}`}>
//                       Read More
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Blog;



import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { allBlogApi } from "../../../../src/Api/Functions/Allblog.Api";
import { Box, Container, Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { blog_pic } from "../../../../src/Api/Axios/axiosInstance";
 import { showallcategoryApi } from "../../../../src/Api/Functions/showallcategory.Api";
 import { catagoryPost } from "../../../../src/Api/Functions/Catagorypost.Api";
 import { latestpostApi } from "../../../../src/Api/Functions/latestpost.Api";
import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { isPending, data: allBlogs } = useQuery({
    queryKey: "allBlog",
    queryFn: allBlogApi,
  });
  const { data: categories } = useQuery({
    queryKey: "category",
    queryFn: showallcategoryApi
  });
  const { data: latestPosts } = useQuery({
    queryKey: "latestPost",
    queryFn: latestpostApi
  });

  const onClickCategory = async (categoryId) => {
    try {
      setSelectedCategory(categoryId);
      const filteredData = await  catagoryPost(categoryId);
      setFilteredBlogs(filteredData);
    } catch (error) {
      console.error("Error while fetching category posts:", error);
    }
  };

  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };
  
  const handlePost = (item) => {
    setSelectedCategory(item._id);
    setFilteredBlogs([item]);
  };
  
  const handleAll = () => {
    setSelectedCategory(null);
    setFilteredBlogs(allBlogs);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Box>
            <Typography variant="h6" align="center" gutterBottom>
              Categories
            </Typography>
            <Button variant="text" color="primary" fullWidth onClick={handleAll}>
              All
            </Button>
            {categories?.map((category) => (
              <Button
                key={category._id}
                onClick={() => onClickCategory(category._id)}
                variant="text"
                color="primary"
                fullWidth
              >
                {category.category}
              </Button>
            ))}
          </Box>
          <Box mt={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Latest Posts
            </Typography>
            <Grid container spacing={2}>
              {latestPosts?.map((post) => (
                <Grid item key={post._id} xs={12} sm={12}>
                  <Box display="flex" alignItems="center">
                    <img src={blog_pic(post._id)} alt="" height="100px" width="80px" />
                     <Button  onClick={() => handlePost(post)}>{post.title}</Button> 
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            {(selectedCategory ? filteredBlogs : allBlogs)?.map((blog) => (
              <Grid item key={blog._id} xs={12} md={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="550px"
                    image={blog_pic(blog._id)}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {truncatedText(blog.postText, 150)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" component={Link} to={`/Blog/${blog._id}`}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
