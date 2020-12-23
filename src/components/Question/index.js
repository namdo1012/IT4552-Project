import React, {useState} from "react";
import "./style.css";

const Question = ({ id, question, setAnswer, answer }) => {

  // const check = (value) => {
  //   if (answer.find(item => item.id === id++)) {
  //     let tmp = answer.filter(item => item.id !== id++)
  //     setAnswer([...tmp,{id:id++,value:value}])
  //   }
  //   else setAnswer([...answer,{id:id++,value:value}])
  // }
  return (
    <div className="question">
      <div className="question__title">Câu hỏi {id + 1}</div>
      <p className="question__content">{question.title}</p>
      <div className="answer">
        {
          question?.answer.map(item => (
              <div className="form-check" key={item?.type}>
                <input
                    className="form-check-input"
                    type="radio"
                    name={`id${item?.content}`}
                    value={item?.type}
                    id={`id${item?.type}`}
                    // onChange={e => check(e.target.value)}
                />
                <label className="form-check-label" htmlFor={`id${item?.type}`}>
                  {item?.content}
                </label>
              </div>
          ))
        }
      </div>
    </div>
  );
};

export default Question;
