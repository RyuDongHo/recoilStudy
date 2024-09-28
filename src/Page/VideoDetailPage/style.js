import styled from "styled-components";

const STYLE = {
  VideoDetail: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  VideoContainer: styled.div`
    width: 70vw;
    max-width: 1280px;
    max-height: 720px;
    display: flex;
    flex-direction: column;
    margin: 16px;
    gap: 16px;
  `,
  VideoThumbnail: styled.img`
    width: 100%;
    border-radius: 8px;
  `,
  CommentsArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  VideoPosterInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  SubScribeBtn: styled.input`
    width: 60px;
    height: 36px;
    background-color: var(--color-gray);
    font-size: small;
    line-height: 36px;
    border: none;
    border-radius: 16px;
  `,
};

export default STYLE;
