import { createSlice } from "@reduxjs/toolkit";

const userTreatmentsSlice = createSlice({
    name: 'userTreatments',
    initialState: {
        vaccines: {},
        wormTreatments: {},
        fleaTreatments: {}
    },
    reducers: {
        addTreatment: (state, action) => {
            const { id, date, name, treatmentType } = action.payload;
            state[treatmentType][id] = {
                id,
                date,
                name,
            };
        },
        removeTreatment: (state, action) => {
            const { id, treatmentType } = action.payload;
            delete state[treatmentType][id];
        }
    }
});

export const selectVaccines = (state) => state.userTreatments.vaccines;
export const selectWormTreatments = (state) => state.userTreatments.wormTreatments;
export const selectFleaTreatments = (state) => state.userTreatments.fleaTreatments;

export const { addTreatment, removeTreatment } = userTreatmentsSlice.actions;
export default userTreatmentsSlice.reducer;
