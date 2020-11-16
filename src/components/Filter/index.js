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
      class="list-group-item list-group-item-action"
      style={{ backgroundColor: title === filter ? "#5BFF7F" : "" }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Filter = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="list-group list-group-flush">
          {list.map((item) => (
            <Item
              title={item.data}
              onClick={() => setFilter(item.data)}
              filter={filter}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
