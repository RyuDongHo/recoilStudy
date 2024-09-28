import styled from "styled-components";

const STYLE = {
  Aside: styled.aside`
    position: -webkit-sticky;
    position: sticky;
    top: 52px;
    bottom: 0;
    left: 0;
    width: 72px;
    height: fit-content;
    display: inline-flex;
    flex-direction: column;
  `,

  AsideTab: styled.div`
    height: 74px;
    width: 72px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.hoverColor};
    }
  `,
  
  AsideIcon: styled.img`
    width: 24px;
    height: 24px;
  `,
  
  AsideInfo: styled.div`
    margin-top: 4px;
    font-weight: 200;
    font-size: 10px;
    width: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  `
};

export default STYLE;