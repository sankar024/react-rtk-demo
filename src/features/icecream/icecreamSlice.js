import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    numberOfIcecream : 5
}

const iceCreamSlice = createSlice({
    name : "Ice Cream",
    initialState,
    reducers:{
        ordered:(state) =>{
            state.numberOfIcecream--
        },
        reOrdered:(state, action ) =>{
            state.numberOfIcecream += action.payload
        },
        extraReducers :(builder) =>{
            builder.addCase(cakeOrdered, (state) =>{
                state.numberOfIcecream--
            })
        }
    }
})

export default iceCreamSlice.reducer;
export const { ordered, reOrdered } = iceCreamSlice.actions