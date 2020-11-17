import React from "react";

const Document = ({ cover, title }) => {
  return (
    <div className="col-sm-6 card mx-3 mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img src={cover} className="card-img" alt={title} />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button type="button" className="btn btn-secondary">
              Tải về
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
