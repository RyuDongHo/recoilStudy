import React from "react";
import CommentInput from "../../../../Widget/CommentInput";
import CommentList from "../../../../Widget/CommentList";
import glassImg from "../../../../Shared/assets/glass.svg";
import thumbImg from "../../../../Shared/assets/thumb2.png";
import STYLE from "./style.js";
import ProfileImg from "../../../../Shared/ui/ProfileImg";
import useShort from "./api/useShort.js";
import handleScroll from "./lib/handleScroll.js";
import useCommentsAreaAtom from "../../../../Shared/recoil/useCommentsAreaAtom.js";

const shortTabs = [
  {
    idx: 0,
    type: "default",
    iconSrc: glassImg,
    text: "1만",
  },
  {
    idx: 1,
    type: "default",
    iconSrc: glassImg,
    text: "싫어요",
  },
  {
    idx: 2,
    type: "comments",
    iconSrc: glassImg,
    text: "310",
  },
  {
    idx: 3,
    type: "default",
    iconSrc: glassImg,
    text: "공유",
  },
  {
    idx: 4,
    type: "default",
    iconSrc: glassImg,
    text: "",
  },
  {
    idx: 5,
    type: "music",
    iconSrc: thumbImg,
    text: "",
  },
];
// 원래는 백엔드에서 shortState가져올 때, 좋아요/댓글 개수를 한 번에 가져옴

const Short = (props) => {
  const {idx} = props;
  handleScroll(idx);
  
  const [commentsArea, commentTabClickEvent] = useCommentsAreaAtom();

  const  [shortState]  = useShort(idx);
  if(!shortState) return null;

  const { thumbnail, posterImg, title } = shortState;

  return (
    <STYLE.Short>
      <STYLE.ShortVideoArea $isCommentOpen={commentsArea}>
        <STYLE.ShortContainer>
          {/* short btns */}
          <STYLE.ShortBtnList>
            <STYLE.ShortBtn>
              <STYLE.ShortIcon src={glassImg} />
            </STYLE.ShortBtn>
            <STYLE.ShortBtn>
              <STYLE.ShortIcon src={glassImg} />
            </STYLE.ShortBtn>
          </STYLE.ShortBtnList>
          {/* short video */}
          <STYLE.ShortMediaContent src={thumbnail} />
          {/* short info */}
          <STYLE.ShortInfo>
            <STYLE.ShortPosterInfo>
              <ProfileImg profileImgSrc={posterImg}/>
              <h5>@poster</h5>
              <STYLE.ShortSubscribeBtn>구독</STYLE.ShortSubscribeBtn>
            </STYLE.ShortPosterInfo>
            <p>{title}</p>
            <p>short video hash tag</p>
            <p>short video music</p>
          </STYLE.ShortInfo>
        </STYLE.ShortContainer>
        {/* short tabs */}
        <STYLE.ShortTabList $isCommentOpen={commentsArea}>
          {shortTabs.map((elem, index) => {
            return (
              <STYLE.ShortTab key={index}>
                {elem.type === "music" ? (
                  <STYLE.ShortMusicImg src={elem.iconSrc} />
                ) : (
                  <>
                    <STYLE.ShortTabBtn
                      onClick={() => {
                        elem.type === "comments" && commentTabClickEvent();
                      }}
                    >
                      <STYLE.ShortIcon src={elem.iconSrc} />
                    </STYLE.ShortTabBtn>
                    <STYLE.ShortTabText>{elem.text}</STYLE.ShortTabText>
                  </>
                )}
              </STYLE.ShortTab>
            );
          })}
        </STYLE.ShortTabList>
      </STYLE.ShortVideoArea>
      {/* short comments area */}
      <STYLE.ShortCommentsArea $isCommentOpen={commentsArea}>
        <STYLE.ShortCommentsAreaHeader>
          <p>댓글 8.9천</p>
          <STYLE.ShortToolBar>
            <STYLE.ShortToolICon src={glassImg} />
            <STYLE.ShortToolICon
              src={glassImg}
              onClick={() => {
                commentTabClickEvent();
              }}
            />
          </STYLE.ShortToolBar>
        </STYLE.ShortCommentsAreaHeader>
        {/* comment list */}
        {commentsArea && <CommentList videoIdx={idx} />}
        <STYLE.CommentInputContainer>
          <CommentInput />
        </STYLE.CommentInputContainer>
      </STYLE.ShortCommentsArea>
    </STYLE.Short>
  );
};

export default Short;
