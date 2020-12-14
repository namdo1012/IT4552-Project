import React from "react";
import "./style.css";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import DocumentCard from "../../components/DocumentCard";
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
  {
    id: 5,
    title: "Ngữ Pháp 50 Bài Minanno Nigongo",
    cover: image,
  },
];

const listFilter = [
  {
    id: 'all',
    data: 'Tất cả'
  },
  {
    id: 'news',
    data: "Bản tin tiếng Nhật",
  },
  {
    id: 'music',
    data: "Video nhạc Nhật",
  },
  {
    id: 'talkshow',
    data: "Talkshow tiếng Nhật",
  },
  {
    id: 'anime',
    data: "Phim Anime, hoạt hình",
  }
]

const References = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="mb-5">This is Navbar</div>

      {/* References */}
      <div className="container-fluid references">
        <div className="row">
          <Filter listFilter={listFilter}/>
          <div className="col-sm-9 p-4">
            <div className="row row-cols-2">
              {documents.map((document) => (
                <DocumentCard
                  key={document.id}
                  title={document.title}
                  cover={document.cover}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default References;
