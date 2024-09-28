import React from "react";

// comment list
const commentList = [
  {
    idx: 0,
    videoIdx: 0,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 1,
    videoIdx: 1,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 2,
    videoIdx: 1,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 3,
    videoIdx: 1,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 4,
    videoIdx: 1,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 5,
    videoIdx: 1,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 6,
    videoIdx: 2,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 7,
    videoIdx: 2,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 8,
    videoIdx: 3,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 9,
    videoIdx: 3,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 10,
    videoIdx: 3,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 11,
    videoIdx: 4,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 12,
    videoIdx: 4,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
  {
    idx: 13,
    videoIdx: 5,
    writer: "작성자",
    content: "댓글입니다.",
    like: 100,
    profileImg: require("../assets/profile1.png"),
  },
];

const useCommentList = (videoIdx) => {
  const [commentListState, setCommentListState] = React.useState();
  React.useEffect(() => {
    const tempList = [];
    commentList.forEach((elem) => {
      elem.videoIdx === parseInt(videoIdx) && tempList.push(elem);
    });
    setCommentListState(tempList);
  }, [videoIdx]);

  return [commentListState];
};

export default useCommentList;
