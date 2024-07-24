import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addVaccine: (state, action) => {
            const { id, date, nameVaccine } = action.payload;
            state.topics[id] = {
                id,
                date,
                nameVaccine,
            };
            console.log("Vaccine added:", state.topics[id]);
        },
        removeVaccine: (state, action) => {
            const { id } = action.payload;
            delete state.topics[id];
        }
    },

});

export const selectTopics = (state) => state.topics.topics;
export const { addVaccine, removeVaccine } = topicsSlice.actions;
export default topicsSlice.reducer;
