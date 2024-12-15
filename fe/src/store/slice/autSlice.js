import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLogged:false,
    key:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signin:(state, action)=>{
            state.isLogged=true
            state.key=action.payload
        },
        signout:(state, action)=>{
            state.isLogged=false
            state.key=null
        }
    }
})

export const {signin, signout} = authSlice.actions
export default authSlice.reducer