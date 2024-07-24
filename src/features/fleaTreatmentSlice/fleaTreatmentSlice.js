import { createSlice } from "@reduxjs/toolkit";

const fleaTreatmentSlice = createSlice({
    name: 'fleaTreatments',
    initialState: {
        fleaTreatments: {

        }
    },
    reducers: {
        addFleaTreatment: (state, action) => {
            const { id, name, date } = action.payload;
            state.fleaTreatments[id] = {
                id,
                name,
                date
            }
        },
        removeFleaTreatment: (state, action) => {
            const { id } = action.payload;
            delete state.fleaTreatments[id];
        }
    }
})

export const selectFleaTreatments = (state) => state.fleaTreatments.fleaTreatments;
export const { addFleaTreatment, removeFleaTreatment } = fleaTreatmentSlice.actions;
export default fleaTreatmentSlice.reducer;