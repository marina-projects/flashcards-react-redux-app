import { configureStore } from "@reduxjs/toolkit";
import vaccinesReducer from '../features/vaccines/vaccinesSlice';
import fleaTreatmentsReducer from '../features/fleaTreatmentSlice/fleaTreatmentSlice';
import wormTreatmentsReducer from '../features/wormTreatmentSlice/wormTreatmentSlice';
import treatmentsReducer from '../features/treatmentsSlice/treatmentsSlice';

export const store = configureStore({
    reducer: {
        vaccines: vaccinesReducer,
        fleaTreatments: fleaTreatmentsReducer,
        wormTreatments: wormTreatmentsReducer,
        
        treatments: treatmentsReducer
    }
});

export default store;
