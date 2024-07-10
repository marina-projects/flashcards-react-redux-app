import React from "react";
import { quizzesList } from "../../data/quizzesList";
import { Link } from "react-router-dom";

const Quizzes = () => {
    return (
        <div className="quizzes div-column">
            <h2>Quizzes</h2>
            {
                quizzesList.map((quiz) => (
                    <div className="quizzes-list div-column">
                        <li>
                            <Link to={`/quizzes/${quiz.id}`}>
                                {quiz.title}
                            </Link>
                        </li>
                    </div>

                ))
            }
            <Link to='/new-quiz'>Create new quiz</Link>
        </div>
    )
}

export default Quizzes;