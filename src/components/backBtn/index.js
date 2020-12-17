import { React } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const BackBtn = ({ children, style, dest }) => {
  return (
    <Link to={`${dest}`}>
      <button className="turn-back-button" style={{ ...style }}>
        <div className="turn-back--icon"></div>
        <span className="turn-back--text">{children}</span>
      </button>
    </Link>
  );
};
