import styled from "styled-components";

const STYLE = {
  RelatedVideoList: styled.section`
    max-width: 402px;
  `,
  RelatedVideo: styled.div`
    margin: 16px;
    display: flex;
    gap: 16px;
    cursor: pointer;
  `,
  RelatedVideoThumbnail: styled.img`
    width: 168px;
    height: 94px;
    border-radius: 8px;
  `,
};

export default STYLE;
