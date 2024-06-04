import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerId: null,
  firstName: '',
  emailAddress: '',
  password: '',
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
    storeEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
    storePassword: (state, action) => {
      state.password = action.payload;
    },
    setSignInStatus: (state, action) => {
      state.isSignedIn = action.payload;
    },

    logout: (state) => {
      state.customerId = null;
      state.firstName = '';
      state.emailAddress = '';
      state.password = '';
      state.isSignedIn = false;
    }
  },
});

export const { storeCustomerId, storeFirstName, storeEmailAddress, storePassword, setSignInStatus, logout } = customerSlice.actions;
export default customerSlice.reducer;
