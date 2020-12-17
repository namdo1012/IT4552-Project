import { React } from "react";
import "./style.css";

export const BackBtn = ({ children }) => {
  return (
    <div
      className="turn-back-button"
      style={{ position: "absolute", top: "80px", left: "75px" }}
    >
      <div className="turn-back--icon"></div>
      <span className="turn-back--text">{children}</span>
    </div>
  );
};
