import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const api = createAsyncThunk('FetchTickets',async () => {

    const response =await fetch('https://meowfacts.herokuapp.com/');
    return response.json();

});

const Slice = createSlice({

    name : 'bookYourTickets',
    initialState : {
        isLoading : false,
        data : [],
        isError : false
    },
    extraReducers:(builder) => {

        builder.addCase(api.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(api.fulfilled,(state,action) => {
            state.isLoading = false;
            console.log("API RESPONSE:", action.payload);
            state.data = action.payload.data;
        });
        builder.addCase(api.rejected,(state,action) => {
            console.log("Error",action.payload);
            state.isError = true; 
            
        });

    },
});

export default Slice.reducer;