import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name} = action.payload;
            state.topics[id] = {
                id,
                name,
                quizIds: []
            }
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
