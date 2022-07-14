import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import companiesService from "../services/companiesService";

export const getCompanies = createAsyncThunk('COMPANIES', async (_, thunkAPI) => {
  try {
    return await companiesService.getCompanies();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: null,
    isError: false,
    isLoading: false,
    message:'',
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.companies = action.payload;
    });
    builder.addCase(getCompanies.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.companies = null;
    });
  }
});

export default companiesSlice.reducer;