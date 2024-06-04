import { configureStore } from '@reduxjs/toolkit';
import userReducer from './customerSlice';
import plantCounterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        plantCounter: plantCounterReducer,
    },
});

export default store;