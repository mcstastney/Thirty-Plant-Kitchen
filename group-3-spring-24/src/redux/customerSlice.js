import { createSlice } from "@reduxjs/toolkit";

// Set the initial state of customer credientials 
const initialState = {
  customerId: null,
  firstName: '',
  emailAddress: '',
  password: '',
  isSignedIn: false,
};


// A slice representing the user, containing the initial state and a set of reducers
// Each reducer function takes the current state and an action as arguments and returns the new state
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

// Export reducers so they can be imported where needed in the app
export const { storeCustomerId, storeFirstName, storeEmailAddress, storePassword, setSignInStatus, logout } = customerSlice.actions;
export default customerSlice.reducer;
