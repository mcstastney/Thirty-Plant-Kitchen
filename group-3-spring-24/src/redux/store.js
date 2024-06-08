// Import the necessary functions and reducers to configure the Redux store
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './customerSlice';
import plantCounterReducer from './counterSlice';

// Create and configure the Redux store using the configureStore function
// Maps slice names to their respective reducers
const store = configureStore({
    reducer: {
        user: userReducer,
        plantCounter: plantCounterReducer,
    },
});

export default store;