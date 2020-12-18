// import React, { useState } from "react";
import React from "react";
import "./style.css";

import { BackBtn } from "../../../components/backBtn";
import Question from "../../../components/Question";

export const Reading = ({ doneLesson, dataLesson }) => {
  console.log("data lesson", dataLesson);
  // const [count, setCount] = useState("");

  const R1 = {
    content:
      "先日、新聞に動物が減っているという記事がのっていた。その新聞にはトラ（注1）のことが書いてあった。世界で自然にいるトラは、だいたい3400頭～5100頭と言われている。100年前には10万頭いたとされるが、その3%～5%に減ってしまった。そのうち3種類のトラがすでにいなくなった。最も多い種類のトラでも、2000頭程度だそうだ。なぜ、こんなに減ってしまったのだろうか。それは、開発（注2）によってトラの生活している森林などが壊されたり、毛皮や薬の原料にすることを目的としてトラを殺したからだそうだ。こうしたことはトラだけではなく、いろいろな動物や植物にも起こっている。開発は人間の生活を便利で豊かにするために行われる。おかげで、私たちは自由に旅行をしたり、自宅で世界中の情報を見られるほど豊かになった。しかし、一方でこのようなことが起こっているも知る必要があるんだろう。\n（注1）トラ：動物\n（注2）開発：森林などを人の役に立つようにすること",
    questions: [
      {
        title: "今のトラの数について、正しいものはどれか。",
        answer: {
          A: "100年前より3～5％少なくなり、3種類のトラがいなくなった。",
          B: "100年前の3～5％程度で、3種類のトラがいなくなった。",
          C: "100年前の3～5％程度で、2000頭少なくなった。",
          D: "100年前より3～5％少なくなり、2000頭しかいない。",
        },
        correctAnswer: "B",
      },
      {
        title: "トラが少なくなった原因として、正しいものはどれか。",
        answer: {
          A: "森林が壊されたり、トラが毛皮や薬の原料にされたから。",
          B: "生活が便利になり、海外旅行も簡単にできるようになったから。",
          C: "世界の情報が自宅で簡単にわかる時代になったから。",
          D: "生活は豊かになったが、トラの生活について知らなかったから。",
        },
        correctAnswer: "A",
      },
    ],
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
          {dataLesson?.title} Hãy đọc đoạn văn dưới đây và trả lời các câu hỏi
          liên quan
        </h4>
        <div className="reading-content container text-left text-dark">
          {R1.content}
        </div>
        {R1.questions.map((question, id) => (
          <Question id={id} question={question} />
        ))}
      </div>
      <div className="done-bar fixed-bottom d-flex justify-content-center">
        <button
          onClick={doneLesson}
          className="btn btn-success my-3 px-5 rounded-pill"
        >
          Kiểm Tra
        </button>
      </div>
    </>
  );
};
