import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography  } from '@mui/material';

const Profile = () => {
  const  {data} = useSelector((state) => state.auth);

  return ( data &&
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography  component="h2">
                  <h2>Profile</h2>
                </Typography>
              </TableCell>
              <TableCell ></TableCell>
              <TableCell>
                {/* <Button variant="contained" endIcon={<EditIcon />} onClick={handleEditing} >
                  Editing
                </Button> */}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                   <h5>Email:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.email}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
               <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Phone number:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.phoneNumber}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Last name:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.lastName}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>First name:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.firstName}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Nickname:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.nickName}</TableCell>
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
                <TableCell align="left">{data.description}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Typography variant='h6' component="h5">
                  <h5>Position:</h5>
                </Typography>
                </TableCell>
                <TableCell align="left">{data.position}</TableCell>
                <TableCell align="">
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};

export default Profile;

