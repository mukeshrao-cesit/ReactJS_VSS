import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initiateProducts: (state, action) => {
      state.productList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initiateProducts } = productSlice.actions;

export default productSlice.reducer;
