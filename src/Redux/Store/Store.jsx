import { configureStore } from "@reduxjs/toolkit";
import counter from './CounterSlice'

export const store=configureStore({
    reducer:{
        count:counter
    }
})