import React from "react";
import './newTopic.css';

const NewTopic = () => {
    return (
        <div className="create-new-topic div-column">
            <h2>Create new topic</h2>
            <form>
                <input 
                    id='topic-name'
                    type='text'
                    placeholder="Topic Name"
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewTopic;