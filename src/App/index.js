// App Layer같은 경우는 Slice가 존재하지 않음
// App의 index.js는 App의 Segment들을 모아주는 역할
// 페이지 들어오자 마자 호출되는 기능들.. App에서
import Page from "../Page"; //index는 대표파일이라 생략가능
import React from "react";
import Header from "./ui/Header";
import GlobalStyles from "./style.js";
import theme from "./theme.js";
import { ThemeProvider } from "styled-components";
import useTheme from "./model/useTheme.js"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [themeState, toggleTheme] = useTheme();
  if(!themeState) return null;
  // 커스텀훅을 이용해, 뷰와 로직을 분리하는게 테스트의 용이성을 가져가기 때문에 필요함
  // 1파일 1목적.. + 통일성

  return (
    <ThemeProvider
      theme={themeState === "light" ? theme.lightTheme : theme.darkTheme}
    >
      <BrowserRouter>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
