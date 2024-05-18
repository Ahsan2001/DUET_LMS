// import library
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Flip, Slide, toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

// import assets 
import { SignInApi } from '../../api';
import { setUser } from '../../redux/userSlice';
import { SigninFormValues } from '../../interface';
import SignInSchema from '../../schemas/signin';
import { Toast, Spinner } from '../../components';



 function SignIn() {

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // handle signin functionlity 
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
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        dispatch(setUser(response?.data));
        setLoading(false);
        setTimeout(() => {
          navigate("/manage-courses")
        }, 1000)
      } else {
        setLoading(false);
        toast.error(response?.response?.data?.message, {
          position: "bottom-right",
          autoClose: 5000,
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
        autoClose: 5000,
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

  // check validation with form ik and yup library
  const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<SigninFormValues>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: SignInSchema,
    onSubmit: async (values, action) => {
      await handleSignin();
      action.resetForm()
    },
  })


  return (
    <Container maxWidth="sm">
      <Box component="section" sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        height: "100vh",
        width: 400,
        margin: 'auto'
      }}>
        <img src="./logo.png" alt="" width={130} height={100} />
        <Typography component="h1" variant="h5" marginTop={5} marginBottom={2} fontWeight="bold">
          Teacher Admin Panel Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            error={!!(errors.email && touched.email)}
            id="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={errors.email && touched.email ? errors.email : undefined}
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            error={!!(errors.password && touched.password)}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={errors.password && touched.password ? errors.password : undefined}
          />
          {loading ?
            <Button sx={{ mt: 3, mb: 2 }} variant="contained" fullWidth>
              <Spinner />
            </Button> :
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
    </Container>
  );
}

export default SignIn