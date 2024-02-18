import { createSlice } from "@reduxjs/toolkit";
 const appSlice =createSlice({
    name:"aap",
    initialState:{
        isMenuOpen:true,
        
    },
    reducers:{
        toggelMenu : (state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu : (state)=>{
            state.isMenuOpen =false

        },
    },
 })
 export default appSlice.reducer
 export const { toggelMenu,closeMenu } = appSlice.actions