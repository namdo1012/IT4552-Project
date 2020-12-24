/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import { BackBtn } from "../../../components/backBtn";

import GrammarImage from "./grammar-img.png";

export const Grammar = ({ doneLesson, dataLesson }) => {
  console.log("data lesson", dataLesson);
  return (
    <>
      <div className="header">
        <BackBtn style={{ marginTop: "50px" }} dest="/course">
          {" "}
          Back to course{" "}
        </BackBtn>
      </div>
      <div className="content container-fluid text-center">
        <h3 className="inline-block mb-3">
          {dataLesson?.title}謙譲語 (Khiêm nhường ngữ)
        </h3>
        <div className="img-content">
          <img src={GrammarImage} className="" alt={dataLesson?.title} />
        </div>
      </div>
      <div className="done-bar fixed-bottom d-flex justify-content-center">
        <button
          onClick={doneLesson}
          className="btn btn-success my-3 px-5 rounded-pill"
        >
          Hoàn Thành
        </button>
      </div>
    </>
  );
};
