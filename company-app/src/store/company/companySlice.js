import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import companiesService from "../services/companiesService";

export const getCompany = createAsyncThunk('GET_COMPANY', async (id, thunkAPI) => {
  try {
    return await companiesService.getCompany(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
});

export const createCompany = createAsyncThunk('CREATE_COMPANY', async (companyData, thunkAPI) => {
  try {
    return await companiesService.createCompany(companyData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
});

const companySlice = createSlice({
  name: 'company',
  initialState: {
    company: null,
    isError: false,
    isLoading: false,
    message:'',
    // errors: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCompany.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(getCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.company = null;
    });

    builder.addCase(createCompany.pending, (state) => {
      state.isLoading = true;
      // state.errors = null;
    });
    builder.addCase(createCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.errors = null;
    });
    builder.addCase(createCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      // state.errors = action.payload;
    });
  }
});

export default companySlice.reducer;