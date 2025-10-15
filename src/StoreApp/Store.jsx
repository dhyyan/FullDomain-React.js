import { configureStore } from "@reduxjs/toolkit";
import counter from "./CounterSlice"
export const Store=configureStore({
    reducer:{
        counter:counter
    }
})