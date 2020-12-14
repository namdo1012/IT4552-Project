import React, { useState } from "react";
import "./style.css";

const list = [
  {
    id: 1,
    data: "Tài liệu Kanji, chữ Hán",
  },
  {
    id: 2,
    data: "Tài liệu luyện nghe",
  },
  {
    id: 3,
    data: "Tài liệu đọc hiểu",
  },
  {
    id: 4,
    data: "Tài liệu ngữ pháp",
  },
  {
    id: 5,
    data: "Tài liệu từ vựng",
  },
];

const Item = ({ title, filter, onClick, id }) => {
  return (
    <button
      id={id}
      type="button"
      className="list-group-item list-group-item-action"
      style={{ backgroundColor: title === filter ? "#5BFF7F" : "" }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Filter = ({listFilter,setStateFilter}) => {
  const [filter, setFilter] = useState("");

  const combineFilter = (id,data) => {
    setStateFilter(id)
    setFilter(data)
  }

  return (
    <div className="col-sm-3 rounded p-4">
      <div className="dropdown mb-2">
        <button
          className="btn btn-secondary dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Tất cả
        </button>
        {/*<div*/}
        {/*  className="dropdown-menu dropdown-menu-lg-right"*/}
        {/*  aria-labelledby="dropdownMenuButton"*/}
        {/*>*/}
        {/*  <a className="dropdown-item" href="#">*/}
        {/*    Action*/}
        {/*  </a>*/}
        {/*  <a className="dropdown-item" href="#">*/}
        {/*    Another action*/}
        {/*  </a>*/}
        {/*  <a className="dropdown-item" href="#">*/}
        {/*    Something else here*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
      <div className="list-group list-group-flush">
        {listFilter.map((item) => (
          <Item
            title={item.data}
            onClick={() => combineFilter(item.id,item.data)}
            filter={filter}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
