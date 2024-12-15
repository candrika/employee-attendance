import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/autSlice'

const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store;