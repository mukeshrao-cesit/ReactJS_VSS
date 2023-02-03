import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalAmount: 0,
  cartQuantity: [],
  productsID: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      state.cartList = [action.payload, ...state.cartList];
      state.totalAmount += action.payload.price;
      state.productsID = [action.payload.id, ...state.productsID];
      state.cartQuantity = [
        { id: action.payload.id, quantity: 1, price: action.payload.price },
        ...state.cartQuantity,
      ];
    },
    addProductQuantity: (state, action) => {
      state.cartQuantity = state.cartQuantity.map((elem) => {
        if (elem.id === action.payload) {
          state.totalAmount += elem.price;
          return {
            id: elem.id,
            quantity: (elem.quantity += 1),
            price: elem.price,
          };
        } else {
          return elem;
        }
      });
    },
    subProductQuantity: (state, action) => {
      state.cartQuantity = state.cartQuantity.map((elem) => {
        if (elem.id === action.payload) {
          state.totalAmount -= elem.price;
          return {
            id: elem.id,
            quantity: (elem.quantity -= 1),
            price: elem.price,
          };
        } else {
          return elem;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddProductToCart, addProductQuantity, subProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
