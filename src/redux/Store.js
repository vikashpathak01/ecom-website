import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slices/CartSlice';
import CardReducer from "./Slices/CartSlice"

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});