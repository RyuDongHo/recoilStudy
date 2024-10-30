import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
// key는 절대 겹치지 않게 설정
const commentsAreaAtom = atom({ key: "COMMENTS_AREA_ATOM", default: false });

const useCommentsAreaAtom = () => {
  const commentsArea = useRecoilValue(commentsAreaAtom);
  const setCommentsArea = useSetRecoilState(commentsAreaAtom);

  const toggleCommnentsAreaEvent = () => {
    setCommentsArea(!commentsArea);
  };

  return [commentsArea, toggleCommnentsAreaEvent];
};
export default useCommentsAreaAtom;
