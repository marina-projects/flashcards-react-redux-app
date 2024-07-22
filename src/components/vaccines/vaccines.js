import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTopics } from '../../features/topics/topicsSlice';
import { selectQuizzes } from '../../features/quizzes/quizessSlice';
import NewVaccine from '../newVaccine/newVaccine';

const Vaccines = () => {
    const vaccines = useSelector(selectTopics);
    const quizzes = useSelector(selectQuizzes);

    return (
        <div className='topics div-column'>
            <h2>Vaccines</h2>
            <NewVaccine />
            {
                Object.values(vaccines).map((topicItem) => (
                    <div className='topic-list' key={topicItem.id}>
                        <li className='topic-item'>
                            <Link to={`/topics/${topicItem.id}`}>
                                <h3>{topicItem.name}</h3>
                            </Link>
                        </li>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Vaccines;
