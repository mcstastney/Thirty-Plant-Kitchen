import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plantCount: 0,
};

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

export const { incrementPlant, decrementPlant, resetPlants, setPlantCount } = plantCounterSlice.actions;
export default plantCounterSlice.reducer;