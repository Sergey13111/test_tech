import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";


import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



import { Button, Box, TextField } from '@mui/material';
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import { createCompany } from "../../store/company/companySlice";

const schema = yup
.object({
  name: yup.string().required(),
  address: yup.string().required(),
  serviceOfActivity: yup.string().required(),
  numberOfEmployees: yup.number().required(),
  description: yup.string().required(),
  type: yup.string().required(),
})
.required();

const CreateCompany = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      address: "",
      serviceOfActivity: "",
      numberOfEmployees: "",
      description: "",
      type: "",
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateCompany =(data) => {
    

    dispatch(createCompany(data)).then(res => {
      if (!res.error) {
        navigate(`/Company/${res.payload._id}`, {replace: true})
      }
    })
    reset();
  };
  
  

  return (
    <>
      <Button 
        variant="text" 
        startIcon={<KeyboardBackspaceTwoToneIcon />} 
        onClick={() => navigate(-1)} 
        isBackButton={ true }>
          Back
      </Button>

      <form onSubmit={handleSubmit(handleCreateCompany)}>
      <Box p={3}>
        <Box my={2}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Box>

        <Box my={2}>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                error={errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
        </Box>

        <Box my={2}>
          <Controller
            name="serviceOfActivity"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Service of activity"
                error={errors.serviceOfActivity}
                helperText={errors.serviceOfActivity?.message}
              />
            )}
          />
        </Box>

        <Box my={2}>
          <Controller
            name="numberOfEmployees"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Number of employees"
                error={errors.numberOfEmployees}
                helperText={errors.numberOfEmployees?.message}
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
            name="type"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Type"
                error={errors.type}
                helperText={errors.type?.message}
              />
            )}
          />
        </Box>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
      </form>


        <Outlet />
    </>
  )
};

export default CreateCompany