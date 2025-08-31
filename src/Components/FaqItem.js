import React, { useState } from "react";
import "./FaqItem.css";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-header" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <button className="toggle-btn">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default FaqItem;
