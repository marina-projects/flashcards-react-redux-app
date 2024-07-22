// import React from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectTopics } from "../../features/topics/topicsSlice";
// import { selectQuizzes } from "../../features/quizzes/quizessSlice";

// const Topic = () => {
//     const topics = useSelector(selectTopics);
//     const quizzes = useSelector(selectQuizzes);
//     const { topicId } = useParams();
//     const topic = topics[topicId];

//     if (!topic) {
//         return <p>Topic not found</p>;
//     }

//     const topicQuizzes = topic.quizIds.map((quizId) => quizzes[quizId]);

//     return (
//         <div className="topic">
//             <div className="div-column">
//                 <NavLink to="/topics">Back to topics</NavLink>
//                 <h2>{topic.name}</h2>
//                 <h3>Quizzes:</h3>
//                 <ul>
//                     {topicQuizzes.map((quiz) => (
//                         <li key={quiz.id}>
//                             <NavLink to={`/quizzes/${quiz.id}`}>{quiz.name}</NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Topic;
