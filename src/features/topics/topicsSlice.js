import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizessSlice";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addVaccine: (state, action) => {
            const { id, name, date } = action.payload;
            state.topics[id] = {
                id,
                name,
                date,
                quizIds: []
            };
            console.log("Vaccine added:", state.topics[id]);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const { id, topicId } = action.payload;
            console.log("Attempting to add quiz to topic:", topicId, id);
            if (state.topics[topicId]) {
                const topic = state.topics[topicId];
                topic.quizIds = topic.quizIds.concat(id);
                console.log("Quiz added to topic:", topic);
            } else {
                console.log("Topic not found:", topicId);
            }
        });
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addVaccine } = topicsSlice.actions;
export default topicsSlice.reducer;
