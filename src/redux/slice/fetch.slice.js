import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
  status: "idle",
  error: null,
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/1`);
  return response.data;
});

// create slice
export const fetchProductSlice = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchProductSlice.reducer;
