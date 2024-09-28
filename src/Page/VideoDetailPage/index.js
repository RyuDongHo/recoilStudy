import React from "react";
import { useParams } from "react-router-dom";
import useVideo from "./api/useVideo.js";
import CommentList from "../../Widget/CommentList";
import CommentInput from "../../Widget/CommentInput";
import RelatedVideoList from "./ui/RelatedVideoList";
import STYLE from "./style.js";
import ProfileImg from "../../Shared/ui/ProfileImg/index.js";

const VideoDetail = () => {
  const idx = useParams().id;
  const [videoState] = useVideo(idx);
  if (!videoState) return null;
  const { thumbnail, posterImg, title, viewCount } = videoState;

  return (
    <STYLE.VideoDetail>
      <STYLE.VideoContainer>
        <STYLE.VideoThumbnail src={thumbnail} />
        <p>{title}</p>
        <STYLE.VideoPosterInfo>
          <ProfileImg profileImgSrc={posterImg} />
          <p>name</p>
          <STYLE.SubScribeBtn type="button" value="구독"></STYLE.SubScribeBtn>
        </STYLE.VideoPosterInfo>
        <p>{viewCount}</p>

        <STYLE.CommentsArea>
          <CommentInput />
          <CommentList videoIdx={idx} />
        </STYLE.CommentsArea>
      </STYLE.VideoContainer>
      <RelatedVideoList idx={idx} />
    </STYLE.VideoDetail>
  );
};

export default VideoDetail;
