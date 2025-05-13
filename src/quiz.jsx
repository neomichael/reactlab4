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

  return (
    <div>
      <h2>Question 1</h2>
      {/* Display the question */}
      <p className="question">{quizBank[0].question}</p>
      {/* Display the options as buttons */}
      {quizBank[0].options.map((option) => (
        <button className="option">{option}</button>
      ))}

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>  
  );
  
}

export default Quiz;