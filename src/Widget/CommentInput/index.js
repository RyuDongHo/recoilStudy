import React from "react";
import STYLE from "./style.js";
import ProfileImg from "../../Shared/styledComponents/ProfileImg/index.js";
import profileImgSrc from "./assets/profile1.png";
const CommentInput = () => {
  return (
    <STYLE.InputContainer>
      <ProfileImg profileImgSrc={profileImgSrc} />
      <STYLE.CommentInput
        type="text"
        placeholder="댓글 입력"
      ></STYLE.CommentInput>
    </STYLE.InputContainer>
  );
};

export default CommentInput;
