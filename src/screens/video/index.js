import React from 'react';
import "./style.css";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import VideoCard from "../../components/VideoCard";

const videos = [
  {
    id: 1,
    title: "Thêm Một Lần Đau",
    singer: "Yua Mikami",
    url: "https://www.youtube.com/embed/ZRL_M876YRE",
    tag: "Hardcore",
  },
  {
    id: 2,
    title: "Thêm Một Lần Đau",
    singer: "Yua Mikami",
    url: "https://www.youtube.com/embed/ZRL_M876YRE",
    tag: "Hardcore",
  },
  {
    id: 3,
    title: "Thêm Một Lần Đau",
    singer: "Yua Mikami",
    url: "https://www.youtube.com/embed/ZRL_M876YRE",
    tag: "Hardcore",
  },
  {
    id: 4,
    title: "Thêm Một Lần Đau",
    singer: "Yua Mikami",
    url: "https://www.youtube.com/embed/ZRL_M876YRE",
    tag: "Hardcore",
  },
  {
    id: 5,
    title: "Thêm Một Lần Đau",
    singer: "Yua Mikami",
    url: "https://www.youtube.com/embed/ZRL_M876YRE",
    tag: "Hardcore",
  },
];

const Video = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="mb-5">This is Navbar</div>

      {/* References */}
      <div className="container-fluid video">
        <div className="row">
          <Filter />
          <div className="col-sm-9 p-4">
            <div className="row row-cols-3">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  singer={video.singer}
                  url={video.url}
                  tag={video.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Video;