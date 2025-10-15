import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        indcrement:(state)=>{
            state.value+=1
        }
    }
})
export const {indcrement}=counterSlice.actions
export default counterSlice.reducer