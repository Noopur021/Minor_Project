import {createSlice } from '@reduxjs/toolkit';





// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState:{ user:null},
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginuser: (state,action) => {
      state.user=action.payload;
 
    },
    logoutuser: (state) => {
      state.user=null;
    },
  },
  
 
});

export const { loginuser, logoutuser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
