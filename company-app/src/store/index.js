import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './companies/companiesSlice';
import companySlice from './company/companySlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore(({
  reducer: {
    companies: companiesSlice,
    company: companySlice,
    auth: authReducer,
  }
}));

