import React from "react";
import homeImg from "./assets/house-solid.svg";
import shortsImg from "./assets/shorts.svg";
import subscribeImg from "./assets/subscribe.svg";
import musicImg from "./assets/music-solid.svg";
import downloadImg from "./assets/download-solid.svg";
import STYLE from "./style.js"; // 변환된 스타일 import
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../Shared/model/handleNavigate.js";
const asideTabs = [
  {
    src: homeImg,
    text: "홈",
  },
  {
    src: shortsImg,
    text: "Shorts",
  },
  {
    src: subscribeImg,
    text: "구독",
  },
  {
    src: musicImg,
    text: "Youtube Music",
  },
  {
    idx: 4,
    src: downloadImg,
    text: "오프라인 저장",
  },
];

const Aside = () => {
  const navigate = useNavigate();
  
  return (
    <STYLE.Aside>
      {asideTabs.map((elem, index) => (
        <STYLE.AsideTab
          key={index}
          onClick={elem.text === "Shorts" ? () => handleNavigation(navigate, "shorts/0") : () => {}}
        >
          <STYLE.AsideIcon src={elem.src} alt="asideTab" />
          <STYLE.AsideInfo>{elem.text}</STYLE.AsideInfo>
        </STYLE.AsideTab>
      ))}
    </STYLE.Aside>
  );
};

export default Aside;