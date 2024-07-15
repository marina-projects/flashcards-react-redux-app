import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../../features/topics/topicsSlice";
import { addQuiz } from "../../features/quizzes/quizessSlice";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './newQuiz.css';

const NewQuiz = () => {
    const topics = useSelector(selectTopics);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [selectedTopicId, setSelectedTopicId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuiz = {
            id: uuidv4(),
            name,
            topicId: selectedTopicId,
            cardIds: [] // Пока пустой массив
        };
        console.log("Creating new quiz:", newQuiz);
        dispatch(addQuiz(newQuiz));
        setName('');
        setSelectedTopicId('');
        navigate('/quizzes');
    }

    return (
        <div className="new-quiz div-column">
            <h2>New Quiz</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    id='quiz-name'
                    value={name}
                    type='text'
                    placeholder="Quiz Name"
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <select 
                    id='quiz-topic'
                    value={selectedTopicId}
                    onChange={(e) => setSelectedTopicId(e.currentTarget.value)}
                >
                    <option value='' disabled>Select a topic</option>
                    {Object.values(topics).map((topic) => (
                        <option key={topic.id} value={topic.id}>{topic.name}</option>
                    ))}
                </select>
                <div className="buttons-area div-row">
                    <button type='submit'>Create Quiz</button>
                </div>
            </form>
        </div>
    );
}

export default NewQuiz;
