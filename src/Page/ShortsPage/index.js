import React from "react";
import Short from "./ui/Short/Short.js";
import useShorts from "./api/useShorts.js";
import STYLE from "./style.js";
import { useParams } from "react-router-dom";
const ShortsPage = () => {
  const idx = useParams().id;
  console.log(idx)
  const [shorts] = useShorts();
  if (!shorts) return null;

  return (
    <STYLE.Shorts>
      <Short idx={idx} />
    </STYLE.Shorts>
  );
};

export default ShortsPage;
