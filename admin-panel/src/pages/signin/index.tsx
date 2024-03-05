import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Flip, Slide, toast } from 'react-toastify';
import { useFormik } from 'formik';
import { SigninFormValues } from '../../interface/index.js';
import SignInSchema from '../../schemas/signin.js';
import { SignInApi } from '../../api';
import {Toast} from '../../components';

export default function SignIn() {




  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();



  const handleSignin = async () => {
    setLoading(true);
    try {
      const data = {
        email: values.email,
        password: values.password
      };
      const response: any = await SignInApi(data);
      if (response.status === 201) {
        toast.success(response?.data?.message, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        // dispatch(setUser(response?.data));
        setLoading(false);
        setTimeout(() => {
          navigate("/dashboard")
        }, 1000)
      } else {
        setLoading(false);
        toast.error(response?.response?.data?.message, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      }
    }

    catch (error) {
      setLoading(false);
      toast.error("Something Went wrong please retry", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      console.log("An error occurred during login:", error);
    }

  };


  const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<SigninFormValues>({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: SignInSchema,
    onSubmit: async (values, action) => {
      console.log(values, "values")
      await handleSignin();
      action.resetForm()
    },
  })



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {errors.email && touched.email ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.email}</p> : undefined}

          <TextField
            margin="normal"
            required
            fullWidth
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && touched.password ? <p className='text-alert text-xs	absolute inset-inline-start-0' >{errors.password}</p> : undefined}

          {loading ? <span>loading ... </span> :
            <Button
              type="submit"
              onClick={() => handleSubmit()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>}
        </Box>
      </Box>
      <Toast />
    </Container>
  );
}