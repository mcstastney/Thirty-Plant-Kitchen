import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerId: null,
  firstName: '',
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
  },
});

export const { storeCustomerId, storeFirstName } = customerSlice.actions;
export default customerSlice.reducer;
