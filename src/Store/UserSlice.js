import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(data)=>{
        const request = await axios.post(`${"http://restapi.adequateshop.com/api/authaccount/registration"}`, data)
        const response =await request.data.data
        AsyncStorage.setItem("user", JSON.stringify(response))
        return response
    }
)
const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        user: null,
        error: null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected,(state)=>{
            state.loading = false;
            state.user = null;
            // console.log(action.error.message);
            if(action.error.message === "Request Failed with status code 401"){
                state.error = "Access Denied! Invalid Credentials";
            }else{
                state.error = action.error.message
            }
        })
    }
})

export default userSlice.reducer;