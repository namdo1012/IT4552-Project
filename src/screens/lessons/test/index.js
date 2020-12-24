import React, { useState } from "react";
import "./style.css";

import { BackBtn } from "../../../components/backBtn";
import Question from "../../../components/Question";

export const Test = ({ doneLesson, dataLesson }) => {
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState(false);
  const [done, setDone] = useState(false);
  const R1 = {
    content:
      "先日、新聞に動物が減っているという記事がのっていた。その新聞にはトラ（注1）のことが書いてあった。世界で自然にいるトラは、だいたい3400頭～5100頭と言われている。100年前には10万頭いたとされるが、その3%～5%に減ってしまった。そのうち3種類のトラがすでにいなくなった。最も多い種類のトラでも、2000頭程度だそうだ。なぜ、こんなに減ってしまったのだろうか。それは、開発（注2）によってトラの生活している森林などが壊されたり、毛皮や薬の原料にすることを目的としてトラを殺したからだそうだ。こうしたことはトラだけではなく、いろいろな動物や植物にも起こっている。開発は人間の生活を便利で豊かにするために行われる。おかげで、私たちは自由に旅行をしたり、自宅で世界中の情報を見られるほど豊かになった。しかし、一方でこのようなことが起こっているも知る必要があるんだろう。\n（注1）トラ：動物\n（注2）開発：森林などを人の役に立つようにすること",
    questions: [
      {
        title: "今のトラの数について、正しいものはどれか。",
        answer: [
          {
            type: "A",
            content: "100年前より3～5％少なくなり、3種類のトラがいなくなった。",
          },
          {
            type: "B",
            content: "100年前の3～5％程度で、3種類のトラがいなくなった。",
          },
          {
            type: "C",
            content: "100年前の3～5％程度で、2000頭少なくなった。",
          },
          {
            type: "D",
            content: "100年前より3～5％少なくなり、2000頭しかいない。",
          },
        ],
        correctAnswer: "B",
        id: 1,
      },
      {
        title: "トラが少なくなった原因として、正しいものはどれか。",
        answer: [
          {
            type: "A",
            content: "森林が壊されたり、トラが毛皮や薬の原料にされたから。",
          },
          {
            type: "B",
            content:
              "生活が便利になり、海外旅行も簡単にできるようになったから。",
          },
          {
            type: "C",
            content: "世界の情報が自宅で簡単にわかる時代になったから。",
          },
          {
            type: "D",
            content:
              "生活は豊かになったが、トラの生活について知らなかったから。",
          },
        ],
        correctAnswer: "A",
        id: 2,
      },
    ],
  };

  const checkResult = () => {
    setResult(true);
    setDone(true);
  };

  return (
    <>
      <div className="header">
        <BackBtn style={{ marginTop: "50px" }} dest="/course">
          {" "}
          Back to course{" "}
        </BackBtn>
      </div>

      <div className="content">
        <h4 className="inline-block text-center mb-3">
          {dataLesson?.title} Chọn phương án đúng để hoàn
          thành các câu sau:
        </h4>
        {R1.questions.map((question, id) => (
          <Question
            id={question.id}
            question={question}
            key={id}
            setAnswer={setAnswer}
            answer={answer}
            result={result}
          />
        ))}
      </div>
      <div className="done-bar fixed-bottom d-flex justify-content-center">
        {done ? (
          <button
            onClick={doneLesson}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Hoàn thành
          </button>
        ) : (
          <button
            onClick={() => checkResult()}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Kiểm Tra
          </button>
        )}
      </div>
    </>
  );
};
