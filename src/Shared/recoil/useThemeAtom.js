import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { getCookie } from "../util/cookies";
// key는 절대 겹치지 않게 설정
const themeAtom = atom({ key: "THEME_ATOM", default: getCookie("theme") || "light" });

const useThemeAtom = () => {
  const theme = useRecoilValue(themeAtom);
  const setTheme = useSetRecoilState(themeAtom);

  const setThemeEvent = (themeName) => {
    setTheme(themeName);
  };

  return [theme, setThemeEvent];
};
export default useThemeAtom;
