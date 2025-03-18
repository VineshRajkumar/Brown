//Refer to the reduxToolkitTodo folder 
// or 14_redux_toolkit_crash_course.md 
// file for explainations as here we 
// are doing the same as that but 
// modifying this store for autherication 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state,action) =>{
            if(!action.payload || !action.payload.userData){
                console.log("login: Invalid action payload", action.payload);
                return;
            }
            //if loggedin set it true
            state.status = true;
            state.userData = action.payload.userData
        },
        logout: (state,action) =>{
            state.status = false
            state.userData = null
        }
    }
})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer 