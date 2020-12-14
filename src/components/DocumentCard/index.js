import React from "react";
import { FaDownload } from "react-icons/fa";

const DocumentCard = ({ cover, title, linkDownload }) => {
  return (
    <div className="col mb-4">
      <div className="card rounded" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-sm-4">
            <img src={cover} className="card-img p-3" alt={title} />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <a href={linkDownload} target="_blank">
              <button type="button" className="btn btn-success mt-4">
                <FaDownload className="mr-1"/>
                Tải về
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
