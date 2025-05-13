import React, { useState } from 'react';

function Quiz() {
    const quiz_bank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
            answer: "Harper Lee"
        },
    ];

    const initialAnswers = [null, null, null];
    
    // State to keep track of the user's answers
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    // State to keep track of the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(2);

    // State to keep track of the score
    const [score, setScore] = useState(0);

    // State to keep track of the selected option
    const [optionSelected, setOptionSelected] = useState("None");

    function handleSelectOption(option) {

    }

    return (
        <div>
            <h2>Question 1</h2>
            <p className='question'>{quiz_bank[1].question}</p>
            {currentQuestionIndex.options.map(option => (
                <button className='option' onClick={() => handleSelectOption(option)}>
                    {" "}
                    {option}
                    {" "}
                </button>
            ))}

            <div className="nav-buttons">
                <button className='prev-button'>Previous</button>
                <button className="next-button">Next</button>
            </div>    
        </div>

  );
}

export default Quiz;