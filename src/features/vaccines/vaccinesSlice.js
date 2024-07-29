import { createSlice } from "@reduxjs/toolkit";

const vaccinesSlice = createSlice({
    name: 'vaccines',
    initialState: {
        vaccines: {}
    },
    reducers: {
        addVaccine: (state, action) => {
            const { id, date, name } = action.payload;
            state.vaccines[id] = {
                id,
                date,
                name,
            };
        },
        removeVaccine: (state, action) => {
            const { id } = action.payload;
            delete state.vaccines[id];
        }
    },

});

export const selectVaccines = (state) => state.vaccines.vaccines;
export const { addVaccine, removeVaccine } = vaccinesSlice.actions;
export default vaccinesSlice.reducer;
