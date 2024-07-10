import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTopics } from '../../features/topics/topicsSlice';

const Topics = () => {
    const topics = useSelector(selectTopics);

    return (
        <div className='topics div-column'>
            <h2>Topics</h2>
            {
                Object.values(topics).map((topicItem) => (
                    <div className='topic-list' key={topicItem.id}>
                        <li className='topic-item'>
                            <Link to={`/topics/${topicItem.id}`}>
                                <h3>{topicItem.name}</h3>
                            </Link>
                        </li>
                    </div>
                ))
            }
            <Link to='/new-topic'>Create new topic</Link>
        </div>
    )
}

export default Topics;
