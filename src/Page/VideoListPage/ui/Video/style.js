import styled from "styled-components";

const STYLE = {
  VideoCard: styled.div`
    width: fit-content;
    flex-grow: 1;
    flex-basis: 300px;
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
  `,
  VideoThumbnail: styled.img`
    width: 100%;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      border-radius: 0;
    }
  `,
  VideoInfo: styled.div`
    display: flex;
  `,
  VideoInfoText: styled.div`
    margin: 0 2px;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default STYLE;