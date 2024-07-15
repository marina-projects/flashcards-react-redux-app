import React, { useState } from "react";
import './newTopic.css';
import { useDispatch } from "react-redux";
import { addTopic } from "../../features/topics/topicsSlice";
import { v4 as uuidv4 } from "uuid";

const NewTopic = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTopic = {
            id: uuidv4(),
            name,
        };
        dispatch(addTopic(newTopic));
        setName('')
    }

    return (
        <div className="create-new-topic div-column">
            <h2>Add new entry</h2>
            <p>{name}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    id='topic-name'
                    value={name}
                    type='textarea'
                    placeholder="Your entry"
                    onChange={(e) => setName(e.currentTarget.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewTopic;