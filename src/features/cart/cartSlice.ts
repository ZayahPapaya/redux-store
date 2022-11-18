import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  cart: any[];
}
const initialState: CartState = {
  cart: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {
      state.cart.push(action.payload.name)
    },
  },
})
export const { addItem } = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;