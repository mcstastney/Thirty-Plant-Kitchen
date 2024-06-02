import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerId: null,
  firstName: '',
  isSignedIn: false,
};


const customerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeCustomerId: (state, action) => {
      state.customerId = action.payload;
    },
    storeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setSignInStatus: (state, action) => {
      state.isSignedIn = action.payload;
    }
  },
});

export const { storeCustomerId, storeFirstName, setSignInStatus } = customerSlice.actions;
export default customerSlice.reducer;
