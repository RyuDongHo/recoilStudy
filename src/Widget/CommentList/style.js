import styled, { css } from "styled-components";

const STYLE = {
  CommentList: styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
  `,
  Comment: styled.div`
    position: relative;
    display: flex;
    gap: 16px;
    font-size: small;
  `,
  CommentProfileImg: styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
  CommentContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  CommentBtnList: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  CommentLikeBtn: styled.img`
    width: 24px;
    border-radius: 50%;
  `,
  CommentInput: styled.input`
    margin-left: 16px;
    border: none;
    background-color: var(--color-gray);
    border-radius: 16px;
    padding: 4px 8px 4px 8px;
    cursor: pointer;
  `,
  CommentTool: styled.img`
    width: 24px;
    position: absolute;
    top: 16px;
    right: 0px;
  `,
};

export default STYLE;
