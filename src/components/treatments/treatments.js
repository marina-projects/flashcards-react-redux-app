import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuizzes } from "../../features/quizzes/quizessSlice";

const Treatments = () => {
    const quizzes = useSelector(selectQuizzes);

    return (
        <div className="quizzes div-column">
            <h2>Treatments</h2>
            {
                Object.values(quizzes).map((quiz) => (
                    <div className="quizzes-list div-column" key={quiz.id}>
                        <li>
                            <Link to={`/quizzes/${quiz.id}`}>
                                {quiz.name}
                            </Link>
                        </li>
                    </div>
                ))
            }
            <Link to='/new-quiz'>Add new treatment</Link>
        </div>
    )
}

export default Treatments;
