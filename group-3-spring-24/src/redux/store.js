import { configureStore } from '@reduxjs/toolkit';
import userReducer from './customerSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;