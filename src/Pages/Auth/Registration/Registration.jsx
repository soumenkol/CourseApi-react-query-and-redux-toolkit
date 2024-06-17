import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography,Grid } from '@mui/material'
import { useMutation } from "@tanstack/react-query";
import { registerApi } from '../../../Api/Functions/Register.Api';

export default function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {mutate,isPending }= useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
          // toast.success("Successfully Registered ");

          if(data.success===true){
            toast.success(data.message)
            localStorage.setItem("photo",data.data.photo)
          }
          else{
            if(data.status===false){
              toast.error(data.message)
            }
          }
        },
      });
    
      const onSubmit = async (data) => {
        // try {
        //   await mutation.mutateAsync(data);
        // } catch (error) {
        //   console.error(error);
        // }
        const formData=new FormData()
       formData.append("name",data.name)
      formData.append("email",data.email)
      formData.append("mobile",data.mobile)
      formData.append("password",data.password)
      formData.append("photo", data.photo[0])
      mutate(formData)

      };
    
    return (
        <div>
            <form>
                <Box display="flex"
                 flexDirection={"column"} 
                  maxWidth={400}
                  alignItems={'center'} 
                  justifyContent={'center'}
                  margin="auto" marginTop={5}
                  padding={3} borderRadius={5}
                  boxShadow={'5px 5px 10px #ccc'}
                  sx={{":hover":{
                         boxShadow:"10px 10px 20px #ccc"
                  },}}>
                    <Typography  variant='h4' padding={3} textAlign="center">Registration</Typography>
                    <TextField {...register("name", { required: true, maxLength: 20 })}
                    margin='normal'
                     type={'text'}
                      variant='outlined'
                       label='Name'
                       error={errors.name}
                       helperText={errors.name && "name is required"}/>
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
                    <TextField   {...register("mobile", { required: true, maxLength: 20 })}
                    margin='normal' 
                    type={'number'}
                     variant='outlined' 
                     label='number'/>
                    <TextField   {...register("password", { required: true })}
                     margin='normal'
                     type={'password'}
                      variant='outlined' 
                      label='Password'/>
                        <TextField
                {...register("photo", { required: true, maxLength: 20 })}

                
                margin="normal"
                variant="outlined"
                type="file"
                error={!!errors.photo}
                helperText={errors.photo && "photo is required"}
              />
              { isPending?(
              <>
             <Button sx={{marginTop:2,borderRadius:2}} 
                    variant='contained'
                     color='warning'
                     type="submit"
                     onClick={handleSubmit(onSubmit)}
                     >Loading...</Button>
              </>
              ):(
              <>
              <Button sx={{marginTop:2,borderRadius:2}} 
                    variant='contained'
                     color='warning'
                     type="submit"
                     onClick={handleSubmit(onSubmit)}
                     >Registration</Button>
              
              
              </>
              )}
                   


<Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  component={Link}
                  to="/login"
                  variant="body2"
                  sx={{ color: "black" }}
                >
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>

                </Box>
            </form>



        </div>
    )
}
