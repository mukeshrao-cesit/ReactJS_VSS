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
    dummyAddToCart:(state,action)=>{

    },
    AddProductToCart: (state, action) => {
      // state.cartList = [action.payload, ...state.cartList];
      // state.totalAmount += action.payload.price;
      // state.productsID = [action.payload.id, ...state.productsID];
      // state.cartQuantity = [
      //   { id: action.payload.id, quantity: 1, price: action.payload.price },
      //   ...state.cartQuantity,
      // ];
    },
    removeAllItemsInCart: (state) => {
      state.cartList = [];
      state.productsID = [];
      state.cartQuantity = [];
      state.totalAmount = 0;
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
    removeItemFromCart: (state, action) => {
      state.cartList = state.cartList.filter((elem) => {
        if (elem.id !== action.payload.id) {
          return elem;
        }
      });
      state.cartQuantity = state.cartQuantity.filter((elem) => {
        if (elem.id !== action.payload.id) {
          return elem;
        }
      });
      state.productsID = state.productsID.filter((elem) => {
        if (elem !== action.payload.id) {
          return elem;
        }
      });
      state.totalAmount -= action.payload.price;
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
export const {
  AddProductToCart,
  removeAllItemsInCart,
  addProductQuantity,
  subProductQuantity,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
