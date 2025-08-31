import React from "react";
import FaqItem from './Components/FaqItem';
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>Full Stack Development - Task 03</h2>
      </header>
      <h1 className="title">FAQ Section</h1>
      <FaqItem
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
      <FaqItem
        question="What is useState?"
        answer="useState is a React Hook that lets you add state to a functional component."
      />
      <FaqItem
        question="Task Number?"
        answer="03. FAQ Toggle APP"
      />
      <footer className="footer">
        <p>Created by <span>Ayesha Aslam</span></p>
      </footer>
    </div>
  );
}

export default App;


