import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/vaccines/vaccinesSlice';
import fleaTreatmentsReducer from '../features/fleaTreatmentSlice/fleaTreatmentSlice';

export const store = configureStore({
    reducer: {
        topics: topicsReducer,
        fleaTreatments: fleaTreatmentsReducer
    }
});