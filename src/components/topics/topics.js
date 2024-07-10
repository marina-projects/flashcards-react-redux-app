import React from 'react';
import { Link } from 'react-router-dom';
import { topicsList } from '../../data/topicsList';

const Topics = () => {
    return (
        <div className='topics div-column'>
            <h2>Topics</h2>
            {
                topicsList.map((topicItem) => (
                    <div className='topic-list'>
                        <li className='topic-item' key={topicItem.topicId}>
                            <Link to={`/topics/${topicItem.topicId}`}>
                                <h3>{topicItem.topicName}</h3>
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