import React from "react";
import STYLE from "./style.js"
import ProfileImg from "../../../../Shared/ui/ProfileImg"
import { handleNavigation } from "../../../../Shared/model/handleNavigate.js";
import { useNavigate } from "react-router-dom";
const Video = (props) => {
  const { data } = props;
  const { idx, thumbnail, posterImg, title, viewCount } = data;
  const navigate = useNavigate();

  return (
    <STYLE.VideoCard idx={idx}>
      <STYLE.VideoThumbnail
        src={thumbnail}
        onClick={() => handleNavigation(navigate, `video-detail/${idx}`)}
      />
      <STYLE.VideoInfo>
        <ProfileImg profileImgSrc={posterImg}/>
        <STYLE.VideoInfoText>
          <h4>{title}</h4>
          <p>{viewCount}</p>
        </STYLE.VideoInfoText>
      </STYLE.VideoInfo>
    </STYLE.VideoCard>
  );
  
};



export default Video;