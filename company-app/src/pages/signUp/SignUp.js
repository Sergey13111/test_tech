import { TextField, Container, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import { fetchRegister, selectIsAuth } from '../../store/auth/authSlice'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone-lite';


const SignUp = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    phoneNumber: yup.string().phone().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    nickName: yup.string().required(),
    description: yup.string().required(),
    position: yup.string().required(),
  })
  .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      phoneNumber: '+38',
      lastName: '',
      firstName: '',
      nickName: '',
      description: '',
      position: '',
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
      return navigate('/');
    }
  };

  return ( 
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

          <Box my={2}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone number"
                  error={errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="last name"
                  error={errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First name"
                  error={errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="nickName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nickname"
                  error={errors.nickName}
                  helperText={errors.nickName?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  error={errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Box>

          <Box my={2}>
            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Position"
                  error={errors.position}
                  helperText={errors.position?.message}
                />
              )}
            />
          </Box>

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
