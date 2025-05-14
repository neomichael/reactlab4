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

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const initialAnswers =[null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const [score, setScore] = useState(0);

    function handleSelectOption(selectedOption) {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = selectedOption;

        setUserAnswers(updatedAnswers);
    }

    function userFinalScore() {
        const correctAnswers = quiz_bank.filter((question, index) => question.answer === userAnswers[index]);
        setScore(correctAnswers.length);
        console.log("Your score is: " + correctAnswers.length);
        // update UI with final score
        document.querySelector('.user-score').style.display = "block";
        document.querySelector('.user-score').style.color = "green";
    }
 
    function handleQuizNavigation(direction) {
        if (direction === 'next') {
            if (currentQuestionIndex < quiz_bank.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                console.log("Current question index: " + currentQuestionIndex);
                }
            else {
                setIsQuizCompleted(true);
                const correctAnswers = quiz_bank.filter((question, index) => question.answer === userAnswers[index]);
                setScore(correctAnswers.length);
                console.log("Current question index: " + currentQuestionIndex);
                userFinalScore(); // UI update final score
            }
        } else if (direction === 'prev') {
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                console.log("Current question index: " + currentQuestionIndex);
            } else {
                setCurrentQuestionIndex(0);
                console.log("Current question index: " + currentQuestionIndex);
            }
        } 
    }
    
    return (
        <div>
            <h2>Question</h2>
            <p className='question'>{currentQuestionIndex + 1 + ". " + quiz_bank[currentQuestionIndex].question}</p>
            {quiz_bank[currentQuestionIndex].options.map(option => (
                <button className='option' onClick={() => handleSelectOption(option)}>
                    {" "}
                    {option}
                    {" "}
                </button>
            ))}
            
            <div>
                <h2>Your Answer</h2>
                <p className='score'>{userAnswers[currentQuestionIndex]}</p>
                <p className='user-score'>Your final score : {score}</p>
            </div>
            
            <div className="nav-buttons">
                <button className='nav-buttons' onClick={() => handleQuizNavigation("prev")}>
                    Previous
                </button>  
                <button className="nav-buttons"  onClick={() => handleQuizNavigation("next")}>
                    Next
                </button>
            </div>    
        </div>

  );
}

export default Quiz;