import styled from "styled-components";

const STYLE = {
  Header: styled.header`
    padding-top: 4px;
    padding-left: 12px;
    padding-right: 12px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    z-index: 10;
  `,

  FlexGapLayout: styled.div`
    display: flex;
    gap: 12px;
  `,

  AsideToggle: styled.img`
    width: 24px;
    padding: 4px;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
  `,

  Logo: styled.img`
    width: 120px;
    cursor: pointer;
  `,

  Search: styled.div`
    flex-basis: 800px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: end;
  `,

  SearchBox: styled.div`
    display: flex;
    flex-basis: 720px;
    height: 100%;
    justify-content: end;
    align-items: center;
    position: relative;
  `,

  SearchInput: styled.input`
    width: 96%;
    height: 100%;
    padding: 0 12px;
    border-radius: 20px 0 0 20px;
    border: 1px solid black;
    outline: none;
    &:focus {
      width: 100%;
      padding-left: 40px;
    }
  `,

  SearchIcon: styled.img`
    width: 24px;
    padding: 4px;
    border-radius: 10px;
    margin-left: 10px;

    &.keyboardIcon {
      position: absolute;
      right: 20px;
    }

    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
  `,

  SearchButton: styled.img`
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
    flex-basis: 56px;
    flex-shrink: 0;
    height: 100%;
    border-radius: 0 20px 20px 0;
    border: 1px solid black;
    padding: 8px;
  `,

  Tools: styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
  `,

  ToolsIcon: styled.img`
    width: 24px;
    padding: 4px;
    border-radius: 10px;
    margin-left: 10px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.btnColor};
    &:hover {
      background-color: ${({ theme }) => theme.btnHoverColor};
    }
  `,
};

export default STYLE;
