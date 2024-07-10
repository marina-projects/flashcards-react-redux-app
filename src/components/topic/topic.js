import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { topicsList } from "../../data/topicsList";

const Topic = () => {

    const {topicId} = useParams();
    const topic = topicsList[topicId];

    if(!topic) {
        return <p>Topic not found</p>;
    }

    return (
        <div className="topic">
            <div className="div-column">
                <NavLink to="/topics">Back to topics</NavLink>
                <h2>{topic.topicName}</h2>
            </div>
        </div>
    )
} 

export default Topic;