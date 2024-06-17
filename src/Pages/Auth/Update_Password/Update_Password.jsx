import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography,Grid } from '@mui/material'
import { useMutation } from "@tanstack/react-query";
import { updateApi } from '../../../../src/Api/Functions/update password.Api';
export default function Update_Password() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {mutate,isPending} = useMutation({
        mutationFn:  updateApi ,
        onSuccess: (data) => {
           console.log(data.status)
          if(data.status===200){
            toast.success(data.message)
            localStorage.setItem("token",data.token)
            localStorage.setItem("id",data.user._id)
          }
          else{
            if(data.status===201){
              toast.error(data.message)
            }
          }
        },
      });
    
      const onSubmit = async (data) => {
        const value={
          "email":data.email,
          "password":data.password
      }
      mutate(value)
      };
    
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
                      {isPending?(
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
                     >Submit</Button>
                     </>
                     )}
                </Box>
            </form>
        </div>
    )
}
