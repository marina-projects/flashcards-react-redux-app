import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizessSlice'

export const store = configureStore({
    reducer: {
        topics: topicsReducer,
        quizzes: quizzesReducer
    }
});