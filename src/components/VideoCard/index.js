import React from "react";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";

const VideoCard = ({ title, singer, url, tag }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <iframe
          className="embed-responsive-item"
          src={url}
          frameBorder={0}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{singer}</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-danger px-4">
              <AiFillPlayCircle className="mr-1" />
              Play
            </a>
            <p className="badge badge-danger px-2">{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
