import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTopics } from "../../features/topics/topicsSlice";

const Topic = () => {

    const topics = useSelector(selectTopics);
    const {topicId} = useParams();
    const topic = topics[topicId];

    if(!topic) {
        return <p>Topic not found</p>;
    }

    return (
        <div className="topic">
            <div className="div-column">
                <NavLink to="/topics">Back to topics</NavLink>
                <h2>{topic.name}</h2>
            </div>
        </div>
    )
} 

export default Topic;