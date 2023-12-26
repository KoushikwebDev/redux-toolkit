import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: "idle",
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions;
export default countSlice.reducer;
