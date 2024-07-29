import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/vaccines/vaccinesSlice';
import fleaTreatmentsReducer from '../features/fleaTreatmentSlice/fleaTreatmentSlice';
import wormTreatmentsReducer from '../features/wormTreatmentSlice/wormTreatmentSlice';
import treatmentsReducer from '../features/treatmentsSlice/treatmentsSlice';

export const store = configureStore({
    reducer: {
        topics: topicsReducer,
        fleaTreatments: fleaTreatmentsReducer,
        wormTreatments: wormTreatmentsReducer,
        
        treatments: treatmentsReducer
    }
});

export default store;
