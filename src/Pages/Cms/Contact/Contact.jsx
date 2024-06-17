import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from '@mui/material'
import { useMutation } from "@tanstack/react-query";
import { contactApi } from '../../../Api/Functions/Contact.Api';
//import { Link } from 'react-router-dom';
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const mutation = useMutation({
        mutationFn: contactApi,
        onSuccess: (data) => {
          // toast.success("Successfully Registered ");
           console.log(data.status)
          if(data.success===true){
            toast.success(data.message)
           
          }
          else{
            if(data.status===false){
              toast.error(data.message)
            }
          }
        },
      });
    
      const onSubmit = async (data) => {
        try {
          await mutation.mutateAsync(data);
        } catch (error) {
          console.error(error);
        }
      

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
                    <Typography  variant='h4' padding={3} textAlign="center">Contact/Create</Typography>


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
                   

                   <TextField {...register("phone", { required: true, maxLength: 20 })}
                    margin='normal'
                     type={'number'}
                      variant='outlined'
                       label='your number'
                       error={errors.phone}
                       helperText={errors.phone && "phone is required"}/>


               <TextField {...register("message", { required: true, maxLength: 20 })}
                    margin='normal'
                     type={'text'}
                     fullWidth
                      variant='outlined'
                       label='your message'
                       error={errors.message}
                       helperText={errors.message && "message is required"}/>


                    <Button sx={{marginTop:3,borderRadius:2}} 
                    variant='contained'
                     color='warning'
                     type="submit"
                     onClick={handleSubmit(onSubmit)}
                     >Submit</Button>
                    
                </Box>
            </form>



        </div>
    )
}
