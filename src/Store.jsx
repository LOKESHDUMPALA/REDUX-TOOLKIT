import { createSlice,configureStore} from "@reduxjs/toolkit";
  
const state={
    balance:0,
    fullname:"",
    mobile:null,
};

  const userSlice =  createSlice({
       name:"lokesh",
       initialState:state,
       reducers:{
           updatemobile : (state,action)=>{
            state.mobile= action.payload
           },
           updatename : (state,action) =>{
            state.fullname = action.payload
           },
           withdraw : (state,action) =>{
            state.balance -= +action.payload
           },
           deposit : (state,action) =>{
            state.balance += +action.payload
           },
       },
   });

   const store = configureStore({
         reducer:{
             user: userSlice.reducer
       }
   })
   export default store;
   console.log(userSlice);
   export const {updatemobile,updatename,withdraw,deposit} = userSlice.actions;
