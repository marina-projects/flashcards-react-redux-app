import { createSlice } from "@reduxjs/toolkit";

const wormTreatmentSlice = createSlice({
    name: 'wormTreatments',
    initialState: {
        wormTreatments: {

        }
    },
    reducers: {
        addWormTreatment: (state, action) => {
            const { id, name, date } = action.payload;
            state.wormTreatments[id] = {
                id,
                name,
                date
            }
        },
        removeWormTreatment: (state, action) => {
            const { id } = action.payload;
            delete state.wormTreatments[id];
        }
    }
})

export const selectWormTreatments = (state) => state.wormTreatments.wormTreatments;
export const { addWormTreatment, removeWormTreatment } = wormTreatmentSlice.actions;
export default wormTreatmentSlice.reducer;