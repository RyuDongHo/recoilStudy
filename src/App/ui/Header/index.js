import React from "react";
import barsImg from "./assets/bars-solid.svg";
import youtubeImg from "./assets/youtube.svg";
import glassImg from "./assets/glass.svg";
import keyboardImg from "./assets/keyboard-regular.svg";
import micImg from "./assets/microphone-solid.svg";
import videoImg from "./assets/video-solid.svg";
import bellImg from "./assets/bell-solid.svg";
import userImg from "./assets/user-solid.svg";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../Shared/model/handleNavigate.js";

import STYLE from "./style.js";

const Header = (props) => {
  const { toggleTheme } = props;
  const navigate = useNavigate();
  return (
    <STYLE.Header>
      <STYLE.FlexGapLayout>
        {/* 어사이트 변경 버튼 */}
        <STYLE.AsideToggle src={barsImg} alt="headerImg" />

        {/* 로고 */}
        <STYLE.Logo
          src={youtubeImg}
          onClick={() => {
            window.location.href = "/";
          }}
          alt="headerImg"
        />
      </STYLE.FlexGapLayout>

      {/* 검색 창 */}
      <STYLE.Search>
        <STYLE.SearchBox>
          <STYLE.SearchInput type="search" placeholder="검색" />
          <STYLE.SearchIcon
            src={keyboardImg}
            className="keyboardIcon"
            alt="keyboardIcon"
          />
        </STYLE.SearchBox>
        <STYLE.SearchButton src={glassImg} alt="searchBtn" />
        <STYLE.SearchIcon src={micImg} alt="micIcon" onClick={toggleTheme} />
      </STYLE.Search>

      {/* 우측 툴바 */}
      <STYLE.Tools>
        <STYLE.ToolsIcon src={videoImg} alt="videoIcon" />
        <STYLE.ToolsIcon src={bellImg} alt="bellIcon" />
        <STYLE.ToolsIcon
          src={userImg}
          alt="userIcon"
          onClick={() => {
            handleNavigation(navigate, "sign-up")
          }}
        />
      </STYLE.Tools>
    </STYLE.Header>
  );
};

export default Header;
