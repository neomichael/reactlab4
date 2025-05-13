import { useState } from "react";

function Quiz() {
  const quizBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
      answer: "Harper Lee",
    },
  ];
  
  const initialAnswers = ["None", "None", "None"];
  const [userAnswers, setUserAnswers] = useState(initialAnswers); // State to store the selected answers
  const [currentQuestion, setCurrentQuestion] = useState(0); // State to track the current question

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option; // Update the selected answer for the current question
    setUserAnswers(newUserAnswers); // Update the state with the new answers
  }
  
  return (
    <div>
      <h2>Question 1</h2>
      {/* Display the question */}
      <p className="question">{quizBank[currentQuestion].question}</p>
      {/* Display the options as buttons */}
      {quizBank[currentQuestion].options.map((option) => (
        <button className="option" onClick={() =>handleSelectOption(option)}>{option}</button>
      ))}

      <p>Selected Option: {option}</p>

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>  
  );
  
}

export default Quiz;