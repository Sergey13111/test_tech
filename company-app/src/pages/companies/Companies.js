import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getCompanies } from '../../store/companies/companiesSlice';

const Companies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { companies, isLoading } = useSelector((state) => state.companies);


  useEffect(() => {
    dispatch(getCompanies())
    
  }, [dispatch]);
  
  if (isLoading) {
    return <p>Loading...</p>
  };

  const handleDetail = (_id) => () => {
    navigate(`/Company/${_id}`)
  }

  const handleCreateCompany = () => {
    navigate("/CreateCompany/")
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Name company</TableCell>
              <TableCell align="right">
                <Button variant="contained" endIcon={<AddCircleOutlineIcon />} onClick={handleCreateCompany}>
                Сreate company
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies && companies.map(({ _id, name }, index) => (
              <TableRow
                key={_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">
               
                
                    <Button variant="outlined" endIcon={<InfoSharpIcon />} onClick={handleDetail(_id)} >
                      Details
                    </Button>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Outlet />
    </>  
  );
};

export default Companies;


