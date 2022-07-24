import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { SignUp } from '../pages/signUp';
import { Login } from '../pages/login';
import { Companies } from '../pages/companies'
import { Company } from '../pages/company';
import { CreateCompany } from '../pages/createCompany';
import { Profile } from '../pages/profile';
import NotFound from '../pages/notFaund/NotFound';

const Routers = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="Companies" element={<Companies />} />
      <Route path="/Company/:id" element={<Company />} />
      <Route path="CreateCompany" element={<CreateCompany />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default Routers;