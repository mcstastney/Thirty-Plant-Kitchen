import { createSlice } from "@reduxjs/toolkit";

// Set the initial state of the counter 
const initialState = {
  plantCount: 0,
};

// A slice representing the counter, containing the initial state and a set of reducers
// Each reducer function takes the current state, adjusts it and returns the new state
const plantCounterSlice = createSlice({
  name: 'plantCounter',
  initialState,
  reducers: {
    incrementPlant: (state) => {
      state.plantCount += 1;
    },
    decrementPlant: (state) => {
      state.plantCount = Math.max(0, state.plantCount - 1);
    },
    resetPlants: (state) => {
      state.plantCount = 0;
    },
    setPlantCount: (state, action) => {
      state.plantCount = action.payload;
    }
  },
});

// Export reducers so they can be imported where needed in the app
export const { incrementPlant, decrementPlant, resetPlants, setPlantCount } = plantCounterSlice.actions;
export default plantCounterSlice.reducer;