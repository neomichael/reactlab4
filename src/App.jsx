import React from "react";
import "./index.css"
import Quiz from "./components/quiz";

function App() {
  return (
    // <QuizProvider>
    <div className="app-container">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
    // </QuizProvider>
  );
}

export default App;