import React from "react";
import useRelatedVideoList from "./api/useRelatedVideoList.js";
import STYLE from "./style.js";
import { handleNavigation } from "../../../../Shared/model/handleNavigate.js";
import { useNavigate } from "react-router-dom";

const RelatedVideoList = (props) => {
  const navigate = useNavigate();
  const { idx } = props;
  const [relatedVideoList] = useRelatedVideoList(idx);
  if (!relatedVideoList) return null;

  return (
    <STYLE.RelatedVideoList>
      {relatedVideoList.map((elem, index) => {
        return (
          <>
            <STYLE.RelatedVideo
              key={index}
              onClick={() => {
                handleNavigation(navigate, `/video-detail/${elem.idx}`);
              }}
            >
              <STYLE.RelatedVideoThumbnail src={elem.thumbnail} />
              <div>
                <p>{elem.title}</p>
                <p>{elem.viewCount}</p>
              </div>
            </STYLE.RelatedVideo>
          </>
        );
      })}
    </STYLE.RelatedVideoList>
  );
};

export default RelatedVideoList;
