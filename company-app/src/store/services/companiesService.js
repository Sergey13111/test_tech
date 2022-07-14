
import axios from '../../helpers/axios'

const getCompanies = async () => {
  const companies = await axios.get('/Companies');
  
    console.log(companies.data)
  return companies.data;
};

const getCompany = async (id) => {
  const company = await axios.get(`/Companies/${id}`);
  
  console.log(company.data)
  return company.data;
};

const createCompany = async (companyData) => {
  const company = await axios.post('/Companies', companyData);
  
  console.log(company.data)
  return company.data;
};

const companiesService = {
  getCompanies,
  getCompany,
  createCompany
};

export default companiesService;