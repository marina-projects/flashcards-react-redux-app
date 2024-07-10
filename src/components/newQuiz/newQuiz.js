import React, { useState } from "react";
import './newQuiz.css'

const NewQuiz = () => {
    const [cards, setCards] = useState([]);

    const addCardHandle = (e) => {
        e.preventDefault();
        setCards([...cards, { front: '', back: '' }]);
    }

    const removeCardHandle = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    }

    const handleInputChange = (index, event) => {
        const newCards = cards.map((card, i) => {
            if (i === index) {
                return { ...card, [event.target.name]: event.target.value };
            }
            return card;
        });
        setCards(newCards);
    }

    return (
        <div className="new-quiz div-column">
            <h2>New Quiz</h2>
            <form>
                <input 
                    id='quiz-name'
                    type='text'
                    placeholder="Quiz Name"
                />
                <select 
                    id='quiz-topic'
                    placeholder='Topic'
                >
                    <option>Topic</option>
                </select>
                {cards.map((card, index) => (
                    <div key={index} className="new-card-area" style={{ display: 'flex' }}>
                        <input 
                            name='front'
                            placeholder="Front"
                            value={card.front}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input 
                            name='back'
                            placeholder="Back"
                            value={card.back}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <button onClick={(e) => {e.preventDefault(); removeCardHandle(index)}}>Remove card</button>
                    </div>
                ))}
                <div className="buttons-area div-row">
                    <button onClick={addCardHandle}>Add card</button>
                    <button type='submit'>Create Quiz</button>
                </div>
            </form>
        </div>
    )
}

export default NewQuiz;
