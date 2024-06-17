import React from 'react'
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography,Grid } from '@mui/material'
import { loginApi } from '../../../../src/Toolkit/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const value = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginApi(value));
  };
  useEffect(() => {
    const fetch = () => {
      const token = localStorage.getItem("token");
      const path = window.location.pathname === "/login";
      if (token) {
        return path && navigate("/");
      }
    };
    fetch();
  }, [navigate, data.isRedirect]);
    return (
        <div>
            <form>
                <Box display="flex"
                 flexDirection={"column"} 
                  maxWidth={400}
                  alignItems={'center'} 
                  justifyContent={'center'}
                  margin="auto" marginTop={1}
                  padding={3} borderRadius={5}
                  boxShadow={'5px 5px 10px #ccc'}
                  sx={{":hover":{
                         boxShadow:"10px 10px 20px #ccc"
                  },}}>
                    <Typography  variant='h4' padding={3} textAlign="center">Login</Typography>
                   
                    <TextField {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                margin='normal' 
                type={'email'}
                variant='outlined'
                label='Email'
                error={errors.email}
                helperText={errors.email && "email is required"}/>
                    <TextField   {...register("password", { required: true })}
                     margin='normal'
                     type={'password'}
                      variant='outlined' 
                      label='Password'/>
                      {data.status === "idle"?(
                      <>
                      <Button sx={{marginTop:3,borderRadius:2}} 
                    variant='contained'
                     color='warning'
                     type="submit"
                     onClick={handleSubmit(onSubmit)}
                     >Loading</Button>
                      </>
                     ):(
                      <>
                    <Button sx={{marginTop:3,borderRadius:2}} 
                    variant='contained'
                     color='warning'
                     type="submit"
                     onClick={handleSubmit(onSubmit)}
                     >Login</Button>
                     </>
                     )}
                     <Grid container >
                <Grid item xs>
                  <Typography component={Link} to={"/Update_Password"} variant="body2" sx={{color:"black"}}>
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component={Link} to="/Registration" variant="body2" sx={{color:"black"}}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Grid>
              </Grid>
                </Box>
            </form>



        </div>
    )
}
