import { createStore } from "redux";
import { getCookie } from "../util/cookies";

const initState = {
  theme: getCookie("theme") || "light",
  isShortCommentsAreaOpen: false,
};

const reducer = (store = initState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      console.log("TOGGLE_THEME");
      return {
        ...store,
        theme: action.theme,
      };
    case "TOGGLE_SHORT_COMMENTS_AREA":
      return {
        ...store,
        isShortCommentsAreaOpen: action.isShortCommentsAreaOpen,
      };
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
