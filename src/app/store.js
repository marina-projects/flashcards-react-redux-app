import { configureStore } from "@reduxjs/toolkit";
import treatmentsReducer from '../features/treatmentsSlice/treatmentsSlice';
import userTreatmentsReducer from '../features/userTreatments/userTreatmentsSlice';

export const store = configureStore({
    reducer: {
        
        treatments: treatmentsReducer,
        userTreatments: userTreatmentsReducer
    }
});

export default store;
