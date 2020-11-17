import React from "react";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import Document from "./Document";
import image from "../../assets/references/MinannoNihongo.jpg";


const documents = [
  {
    id: 1,
    title: "Ngữ Pháp 50 Bài Minanno Nigongo",
    cover: image,
  },
  {
    id: 2,
    title: "Ngữ Pháp 50 Bài Minanno Nigongo",
    cover: image,
  },
  {
    id: 3,
    title: "Ngữ Pháp 50 Bài Minanno Nigongo",
    cover: image,
  },
  {
    id: 4,
    title: "Ngữ Pháp 50 Bài Minanno Nigongo",
    cover: image,
  },
];

const References = () => {
  return (
    <div>
      <div className="mb-5">This is Navbar</div>
      <div className="container">
        <div className="row">
          <Filter />
          <div className="col-sm-9">
            <div className="row">
              {documents.map((document) => (
                <Document key={document.id} title={document.title} cover={document.cover} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
