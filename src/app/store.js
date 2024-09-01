import { configureStore } from "@reduxjs/toolkit";
import treatmentsReducer from '../features/treatmentsSlice/treatmentsSlice';
import userTreatmentsReducer from '../features/userTreatments/userTreatmentsSlice';
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        
        treatments: treatmentsReducer,
        userTreatments: userTreatmentsReducer,
        users: usersReducer
    }
});

export default store;
