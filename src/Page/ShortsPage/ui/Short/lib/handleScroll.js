import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../../../../Shared/model/handleNavigate";
import React from "react";

const useHandleScroll = (idx) => {
  const navigate = useNavigate();

  React.useEffect(()=>{
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 100) {
        handleNavigation(navigate, `/shorts/${parseInt(++idx)}`)
      } else {
        if(parseInt(idx) <= 0) return;
        handleNavigation(navigate, `/shorts/${parseInt(--idx)}`)
      }
    });
  }, [])
};

export default useHandleScroll;
