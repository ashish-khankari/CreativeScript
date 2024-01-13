// SignUpSlice.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (data) => {
    // console.log("inside slice",data)
    try {
      const response = await axios.post("http://restapi.adequateshop.com/api/authaccount/registration", data);
      AsyncStorage.setItem("user", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const signUpSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {
      name: null,
      email: null,
      password: null,
    },
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = {
          name: null,
          email: null,
          password: null,
        };
        state.error = action.error.message;
      });
  },
});


export default signUpSlice.reducer;
