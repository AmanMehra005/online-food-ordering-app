import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";  // Updated here

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
