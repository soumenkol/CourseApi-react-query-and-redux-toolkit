// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// import Box from "@mui/material/Box";
// import { useQuery } from '@tanstack/react-query'

// import { TestimonialApi } from '../../../../src/Api/Functions/Testimonial.Api'
// import Container from "@mui/material/Container";
// import { testimonial_pic } from "../../../../src/Api/Axios/axiosInstance";

// function MultipleItems() {
//     const {isPending,data}=useQuery({
//         queryKey:"testimonial",
//         queryFn:TestimonialApi
//     })
//     // console.log(data);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true,
//     autoplaySpeed: 1000,
//   };

//   return (
//     <Box
//       className="slider-container"
//       sx={{
//         width: "100%",
//         overflow: "hidden",
//         height: "1000px",
//         backgroundColor: "#f7f7f7",

//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           fontWeight: "700",
//           margin: "20px",
//           paddingTop: "70px",
//         }}
//         className="Sp"
//       >
//         Testimonial
//       </Typography>
//       <hr
//         style={{
//           width: "60px",
//           fontWeight: "bold",
//           color: "#20b13c",
//           border: "2px solid green",
//           margin: "0 auto",
//         }}
//       />
//       <Container>
//         <Slider {...settings}>
//           {data?.map((item) => (
//             <Box key={item._id} mx={2}>
//               <Card sx={{ maxWidth: 100, height: "250px", marginTop: "30px" }}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     image={testimonial_pic(item._id)}
//                     alt="green iguana"
//                     sx={{
//                       height: "50px",
//                       width: "50px",
//                       borderRadius: "20%",
//                       alignContent: "center",
//                       margin: "0 auto",
//                       objectFit: "cover",
//                       marginTop: "10px",
//                     }}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="Box">
//                       {item.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {item.talk}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Box>
//           ))}
//         </Slider>
//       </Container>
//     </Box>
//   );
// }

// export default MultipleItems;




import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from '@tanstack/react-query'
import { TestimonialApi } from '../../../../src/Api/Functions/Testimonial.Api'

import Container from "@mui/material/Container";
import { testimonial_pic } from "../../../../src/Api/Axios/axiosInstance";


function MultipleItems() {
    const {isPending,data}=useQuery({
        queryKey:"testimonial",
        queryFn:TestimonialApi
    })
    console.log(data);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1000,
    };

  return (
    <Box
      className="slider-container"
      sx={{
        width: "100%",
        overflow: "hidden",
        height: "750px",
        backgroundColor: "#f7f7f7",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "700",
          margin: "20px",
          paddingTop: "70px",
        }}
        className="Sp"
      >
        Testimonial
      </Typography>
      <hr
        style={{
          width: "60px",
          fontWeight: "bold",
          color: "#20b13c",
          border: "2px solid green",
          margin: "0 auto",
        }}
      />
      <Container>
        <Slider {...settings}>
          {data?.map((item) => (
            <Box key={item._id} mx={2}>
              <Card sx={{ maxWidth: 345, height: "500px", marginTop: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={testimonial_pic(item._id)}
                    alt="green iguana"
                    sx={{
                      height: "250px",
                      width: "200px",
                      borderRadius: "20%",
                      alignContent: "center",
                      margin: "0 auto",
                      objectFit: "cover",
                      marginTop: "10px",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="Box">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.talk}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default MultipleItems;




// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { TestimonialApi } from '../../../../src/Api/Functions/Testimonial.Api'

// import { Container, Grid } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { testimonial_pic } from "../../../../src/Api/Axios/axiosInstance";


// const Courses = () => {
//   const { isPending, data } = useQuery({
//     queryKey: "course",
//     queryFn: TestimonialApi,
//   });
//   console.log(data);
//   return (
//     <Container>
//       <Grid container sx={{ marginTop: "100px", marginBottom: "50px" }}>
//         {data?.map((item) => (
//           <Grid item lg={4}>
//             <Card sx={{ maxWidth: 345, marginTop: "10px" }}>
//               <CardMedia
//                 component="img"
//                 alt="green iguana"
//                 height="300px"
//                 image={ testimonial_pic(item._id)}
//               />
//               <CardContent sx={{ textAlign: "center" }}>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {<span style={{ fontWeight: "900" }}>{item.fees}</span>}/
//                   {item.talk}
//                 </Typography>
              
//               </CardContent>
//               <CardActions sx={{ justifyContent: "center" }}>
//                 <Button
//                   size="large"
//                   variant="outlined"
                
//                   color="success"
//                   sx={{ backgroundColor: "blueviolet",color:"whitesmoke" }}
//                 >
//                   Buy
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Courses;
