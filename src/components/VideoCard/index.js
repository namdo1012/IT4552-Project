import React from "react";
import "./style.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";

const VideoCard = ({ title, singer, url, tag }) => {
  console.log(url);
  return (
    <div className="col mb-4">
      <div className="card">
        <iframe
          title={`${url}`}
          className="embed-responsive-item"
          src={url}
          frameBorder={0}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="card-body">
          <h5 className="video__card-title">{title}</h5>
          <div className="video__card-singer">
            <GiMicrophone />
            <i style={{ marginLeft: "5px", marginRight: "5px" }}>Singer:</i>
            Lê Nhật Huy{" "}
          </div>

          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "25px" }}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn video__button--play"
              style={{
                backgroundColor: "#FF5B5B",
                boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <AiFillPlayCircle className="mr-1" />
              Play
            </a>
          </div>
        </div>
        <p className="badge badge-success video__tag">{tag}</p>
      </div>
    </div>
  );
};

export default VideoCard;
