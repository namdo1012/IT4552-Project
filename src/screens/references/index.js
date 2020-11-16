import React from "react";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";

const References = () => {
  return (
    <div>
      <div className="mb-5">This is Navbar</div>
      <div className="container">
        <div className="row">
          <Filter />
          <div className="col-sm-9">References</div>
        </div>
      </div>
    </div>
  );
};

export default References;
