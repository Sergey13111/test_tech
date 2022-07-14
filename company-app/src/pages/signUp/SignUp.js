import { TextField, Container, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { fetchRegister, selectIsAuth } from '../../store/auth/authSlice'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const SignUp = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),

    // phoneNumber: yup.string().phone(),
    // lastName: yup.string(),
    // firstName: yup.string(),
    // nickname: yup.string(),
    // description: yup.string(),
    // position: yup.string(),
  })
  .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'test@test.com',
      password: "123",
    }
  });

  const handleSignUp = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data)
    if (!data.payload) {
      return alert('Failed to login!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

    if (isAuth) {
      return <Navigate to="/" />;
    }
  };

  return ( 
  // <h1>fsdsfdf</h1>
    <>
    
      <Container maxWidth="xs">
        <h1>registrtation</h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
        <Box p={3}>
          <Box my={2}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="email"
                  error={errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          {/* <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="password"
                  error={errors.password}
                  helperText={errors.pasword?.message}
                />
              )}
            />
          </Box> */}

          <Button variant="contained" type="submit">
            Registration
          </Button>
        </Box>
      </form>
      </Container>
      
      <Outlet />
      
    </>
  );
};

export default SignUp;
