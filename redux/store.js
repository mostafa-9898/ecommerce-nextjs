import { configureStore } from "@reduxjs/toolkit";

// reducres
import cartReducer from "./features/cartSlice";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})