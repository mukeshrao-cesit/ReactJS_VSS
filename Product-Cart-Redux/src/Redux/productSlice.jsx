import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  isFetching: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProduct: (state) => {
      state.isFetching = true;
    },
    initiateProducts: (state, action) => {
      state.productList = action.payload;
      state.isFetching = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchingProduct, initiateProducts } = productSlice.actions;

export default productSlice.reducer;
