import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';

export const store = configureStore({
    reducer: {
        topics: topicsReducer
    }
});