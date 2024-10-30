import { getCookie, setCookie } from "../../Shared/util/cookies";
import useThemeAtom from "../../Shared/recoil/useThemeAtom";
const useTheme = () => {
  const [theme, setThemeEvent] = useThemeAtom();

  const toggleTheme = () => {
    const currentTheme = getCookie("theme") || "light";
    switch (currentTheme) {
      case "light":
        setThemeEvent("dark");
        setCookie("theme", "dark", { path: "/" });
        return;
      case "dark":
        setThemeEvent("light");
        setCookie("theme", "light", { path: "/" });
        return;
      default:
        return;
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
