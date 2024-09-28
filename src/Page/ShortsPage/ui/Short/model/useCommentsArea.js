import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_SHORT_COMMENTS_AREA } from "../../../../../Shared/redux/action";

const useCommentsArea = () => {
  const commentsArea = useSelector((store) => store.isShortCommentsAreaOpen);
  const dispatch = useDispatch();
  const toggleCommentsArea = () => {
    dispatch(TOGGLE_SHORT_COMMENTS_AREA(!commentsArea));
  };

  return [commentsArea, toggleCommentsArea];
};

export default useCommentsArea;
