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
        erroor: null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.erroor = null;
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading = false;
            state.user = action.payload;
            state.erroor = null;
        })
        .addCase(loginUser.rejected,(state)=>{
            state.loading = false;
            state.user = null;
            // console.log(action.erroor.message);
            if(action.erroor.message === "Request Failed with status code 401"){
                state.erroor = "Access Denied! Invalid Credentials";
            }else{
                state.erroor = action.erroor.message
            }
        })
    }
})

export default userSlice.reducer;