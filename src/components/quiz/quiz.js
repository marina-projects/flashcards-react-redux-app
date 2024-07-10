import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { quizzesList } from '../../data/quizzesList';

const Quiz = () => {
    const {quizId} = useParams();
    const quiz = quizzesList[quizId];

    if(!quiz) {
        return (
            <p>Quiz is not found</p>
        )
    }


    return (
        <div className='quiz div-column'>
            <NavLink to='/quizzes'>Back to quizzes</NavLink>
            <h2>
               {quiz.title}
            </h2>
        </div>
    )
}

export default Quiz;