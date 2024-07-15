import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizessSlice";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name } = action.payload;
            state.topics[id] = {
                id,
                name,
                quizIds: []
            };
            console.log("Topic added:", state.topics[id]);
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
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
