import styled, { css } from "styled-components";

const STYLE = {
  // Short
  Short: styled.div`
    margin-top: 4px;
    padding-left: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  // ShortIcon
  ShortIcon: styled.img`
    width: 24px;
  `,
  // commentArea
  ShortCommentsArea: styled.div`
    transition: all 0.3s;
    position: relative;
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 0.5px 2px black;
    width: calc(48vh + 3px);
    height: calc(100vh - 96px);
    min-width: 350px;
    min-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    transition: all 0.3s;
    ${(props) => {
      switch (props.$isCommentOpen) {
        case true:
          return css`
            visibility: visible;
            transform: translateX(0);
          `;
        case false:
          return css`
            visibility: hidden;
            transform: translateX(calc(-24vh - 1.5px));
          `;
        default:
          break;
      }
    }}
  `,
  // videoArea
  ShortVideoArea: styled.div`
    position: relative;
    transition: all 0.3s;
    width: calc(48vh + 3px);
    height: calc(96vh - 96px);
    min-width: 350px;
    min-height: 680px;
    background-color: gray;
    display: flex;
    align-items: end;
    justify-content: space-between;
    z-index: 1;
    ${(props) => {
      switch (props.$isCommentOpen) {
        case true:
          return css`
            border-radius: 8px 0 0 8px;
          `;
        case false:
          return css`
            transform: translateX(calc(24vh + 1.5px));
            border-radius: 8px;
          `;
        default:
          break;
      }
    }}/* ${(props) => {
      props.$isCommentOpen
        ? css`
            border-radius: 8px 0 0 8px;
          `
        : css`
            transform: translateX(calc(24vh + 1.5px));
            border-radius: 8px;
          `;
    }} */
  `,
  ShortContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  // shortBtns
  ShortBtnList: styled.div`
    display: flex;
    margin: 16px;
    gap: 16px;
  `,
  ShortBtn: styled.div`
    border-radius: 50%;
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ShortSubscribeBtn: styled.div`
    width: 60px;
    height: 32px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: small;
  `,
  // videoContent
  ShortMediaContent: styled.img`
    height: 100%;
  `,
  // shortInfo
  ShortInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px;
    border-radius: 8px;
  `,
  ShortPosterInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  ShortPosterImg: styled.img`
    width: 36px;
    border-radius: 80%;
  `,
  // shortTabs
  ShortTabList: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    ${(props) => {
      switch (props.$isCommentOpen) {
        case true:
          return css`
            right: 0;
            margin: 0 12px 24px 12px;
            gap: 16px;
          `;
        case false:
          return css`
            right: -72px;
            margin: 0 12px 24px 12px;
            gap: 16px;
          `;
        default:
          break;
      }
    }}
  `,
  ShortTab: styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `,
  ShortMusicImg: styled.img`
    width: 48px;
    height: 48px;
    border-radius: 10%;
  `,
  ShortTabBtn: styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: gray;
    }
  `,
  ShortTabText: styled.p`
    font-size: 14px;
    font-weight: 400;
  `,
  ShortCommentsAreaHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    margin-bottom: 16px;
  `,
  ShortToolBar: styled.div`
    display: flex;
    gap: 12px;
  `,
  ShortToolICon: styled.img`
    cursor: pointer;
    width: 24px;
  `,

  CommentInputContainer: styled.div`
    margin-top: 16px;
    padding: 16px;
    border-top: 1px solid black;
  `,
};

export default STYLE;
