// import React from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectQuizzes } from '../../features/quizzes/quizessSlice';
// import { selectTopics } from '../../features/topics/topicsSlice';

// const Quiz = () => {
//     const quizzes = useSelector(selectQuizzes);
//     const topics = useSelector(selectTopics);
//     const { quizId } = useParams();
//     const quiz = quizzes[quizId];
//     const topic = quiz ? topics[quiz.topicId] : null;

//     if (!quiz) {
//         return (
//             <p>Quiz is not found</p>
//         );
//     }

//     return (
//         <div className='quiz div-column'>
//             <NavLink to='/quizzes'>Back to quizzes</NavLink>
//             <h2>{quiz.name}</h2>
//             {topic && (
//                 <div>
//                     <h3>Topic: {topic.name}</h3>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Quiz;
