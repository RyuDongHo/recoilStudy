import React from "react";
import useCommentList from "./hook/useCommentList.js";
import glassImg from "../../Shared/assets/glass.svg";
import STYLE from "./style.js";
const CommentList = (props) => {
  const { videoIdx } = props;
  const [commentListState] = useCommentList(videoIdx);
  if (!commentListState) return null;

  return (
    <STYLE.CommentList>
      {commentListState.map((elem, index) => {
        const { writer, content, like, profileImg } = elem;
        return (
          <STYLE.Comment key={index}>
            <STYLE.CommentProfileImg src={profileImg} />
            <STYLE.CommentContainer>
              <p>@{writer}</p>
              <p>{content}</p>
              <STYLE.CommentBtnList>
                <STYLE.CommentLikeBtn src={glassImg} />
                <p>{like}</p>
                <STYLE.CommentLikeBtn src={glassImg} />
                <STYLE.CommentInput type="button" value="답글" />
              </STYLE.CommentBtnList>
            </STYLE.CommentContainer>
            <STYLE.CommentTool src={glassImg} />
          </STYLE.Comment>
        );
      })}
    </STYLE.CommentList>
  );
};

export default CommentList;
