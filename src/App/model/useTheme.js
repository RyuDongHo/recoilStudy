import { getCookie, setCookie } from "../../Shared/util/cookies";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../../Shared/redux/action.js";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);

  const toggleTheme = () => {
    const currentTheme = getCookie("theme");
    switch (currentTheme) {
      case "light":
        dispatch(TOGGLE_THEME('dark'));
        setCookie("theme", "dark", { path: "/" });
        return;
      case "dark":
        dispatch(TOGGLE_THEME('light'));
        setCookie("theme", "light", { path: "/" });
        return;
      default:
        return;
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
