import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, company , location,salary}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="#1f93ff" />
          )}
        </button>
      </div>
      <div className="question-answer">
      {showAnswer && <p className="u-text-small">Company: {company}</p>}
      {showAnswer && <p className="u-text-small">Location: {location}</p>}
      {showAnswer && <p className="u-text-small">Salary: {salary}</p>}
      </div>
    </div>
  );
};

export default Question;