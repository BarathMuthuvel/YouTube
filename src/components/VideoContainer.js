import React, { useEffect, useState } from "react";
import { YT_API } from "../utils/constant";
import VideoCards, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YT_API);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {/* {videos[3] && <AdVideoCard info={videos[3]}/>} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
