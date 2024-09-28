import React from "react";
import Video from "./ui/Video";
import useVideoList from "./api/useVideoList.js";
import STYLE from "./style.js"
const VideoListPage = () => {
  const [videoList] = useVideoList();
  if (!videoList) return null;
  return (
    <STYLE.VideoList>
      {videoList.map((elem, index) => {
        return (
          <Video key={index} data={elem} />
        );
      })}
    </STYLE.VideoList>
  );
};

export default VideoListPage;
