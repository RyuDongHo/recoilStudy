import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
// key는 절대 겹치지 않게 설정
const asideExpandAtom = atom({ key: "ASIDE_EXPAND_ATOM", default: false });

const useAsideExpandAtom = () => {
  const asideExpand = useRecoilValue(asideExpandAtom);
  const setAsideExpand = useSetRecoilState(asideExpandAtom);

  const toggleAsideExpandEvent = () => {
    setAsideExpand(!asideExpand);
  };

  return [asideExpand, toggleAsideExpandEvent];
};
export default useAsideExpandAtom;
