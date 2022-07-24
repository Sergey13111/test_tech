import { TextField, Container, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { fetchAuth, selectIsAuth } from '../../store/auth/authSlice';


const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const handleLogin = async (values) => {
    const data = await dispatch(fetchAuth(values));
    console.log(data)
    if (!data.payload) {
      return alert('Failed to login!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }

    if (isAuth) {
      return navigate('/');
    }
  };

  console.log('isAuth',isAuth)

  return (
    <>  
      <Container maxWidth="xs">
        <h1>LogIn</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
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
                  helperText={errors.password?.message}
                />
              )}
            />
          </Box>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
      </Container>

      <Outlet />
    </>
  );
};

export default Login;