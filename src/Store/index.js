import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./UserSlice";
import signUpReducer from "./SignUpSlice"
const store = configureStore({
    reducer:{
        // user: userReducer,
        signUp: signUpReducer
    }
})

export default store