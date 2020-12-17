import React, { useState, useEffect } from "react";
import "./style.css";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import VideoCard from "../../components/VideoCard";
import firebase from "../../services/firebase/firebase";

const listFilter = [
  {
    id: "all",
    data: "Tất cả",
  },
  {
    id: "news",
    data: "Bản tin tiếng Nhật",
  },
  {
    id: "music",
    data: "Video nhạc Nhật",
  },
  {
    id: "talkshow",
    data: "Talkshow tiếng Nhật",
  },
  {
    id: "anime",
    data: "Phim Anime, hoạt hình",
  },
];

export const Video = () => {
  const [videos, setVideos] = useState([]);
  const [checkVideos, setCheckVideos] = useState([]);

  const getVideos = () => {
    let db = firebase.doc(`Video/All`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data()["videos"];
        setVideos(data);
        setCheckVideos(data);
      } else {
        // doc.data() will be undefined in this case
        console.log("no data");
      }
    });
  };

  const setStateFilter = (typeCheck) => {
    let tmp = [...checkVideos.filter((item) => item.type === typeCheck)];
    typeCheck === "all" ? setVideos(checkVideos) : setVideos(tmp);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="mb-5">This is Navbar</div>

      {/* References */}
      <div className="container-fluid video">
        <div className="row">
          <Filter
            listFilter={listFilter}
            setStateFilter={(typeCheck) => setStateFilter(typeCheck)}
          />
          <div className="col-sm-9 p-4">
            <div className="row row-cols-3">
              {videos?.map((item) => (
                <VideoCard
                  key={item?.id}
                  title={item?.title}
                  // singer={item?.singer}
                  url={item?.url}
                  tag={item?.tag}
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
