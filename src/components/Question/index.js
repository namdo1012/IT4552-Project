import React from "react";
import "./style.css";

const Question = ({ id, question }) => {
  return (
    <div className="question">
      <div className="question__title">Câu hỏi {id + 1}</div>
      <p className="question__content">{question.title}</p>
      <div className="answer">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={id + "answer"}
            value="A"
            id={id + "A"}
          />
          <label className="form-check-label" htmlFor={id + "A"}>
            {question.answer.A}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={id + "answer"}
            value="B"
            id={id + "B"}
          />
          <label className="form-check-label" htmlFor={id + "B"}>
            {question.answer.B}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={id + "answer"}
            value="C"
            id={id + "C"}
          />
          <label className="form-check-label" htmlFor={id + "C"}>
            {question.answer.C}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={id + "answer"}
            value="D"
            id={id + "D"}
          />
          <label className="form-check-label" htmlFor={id + "D"}>
            {question.answer.D}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question;
