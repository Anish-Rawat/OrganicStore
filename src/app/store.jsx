import { configureStore } from "@reduxjs/toolkit";
import cartQuantityReducer from "../features/cartQuantity/cartQuantitySlice"

export const store  = configureStore({
    reducer: {
        cartQuantity : cartQuantityReducer,
    },
})