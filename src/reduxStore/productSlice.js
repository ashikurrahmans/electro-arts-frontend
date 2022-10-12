import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  productsSlice.actions;

export default productsSlice.reducer;
