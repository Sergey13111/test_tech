import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography  } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import EditIcon from '@mui/icons-material/Edit';

import { getCompany } from '../../store/company/companySlice';

const Company = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const{ company, isLoading } = useSelector(state => state.company);

  const handleEditing = () => {
    navigate('/Company/')
  }

  useEffect(() => {
    dispatch(getCompany(id))
    
  }, [dispatch, id]);



  if (isLoading) {
    return <p>Loading...</p>
  };

  return (company &&
    <>
      <Button 
      variant="text" 
      startIcon={<KeyboardBackspaceTwoToneIcon />} 
      onClick={() => navigate(-1)} 
      isBackButton={ true }>
        Back
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography  component="h2">
                  <h2>Info</h2>
                </Typography>
              </TableCell>
              <TableCell ></TableCell>
              <TableCell>
                <Button variant="contained" endIcon={<EditIcon />} onClick={handleEditing} >
                  Editing
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
         
          <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                   <h5>Name:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.name}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Address:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.address}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Service of activity:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.serviceOfActivity}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Number of employees:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.numberOfEmployees}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Description:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.description}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Type:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{company.type}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Outlet />
    </>
  )
};

export default Company;