import React from "react";
// videoList
const videoList = [];
for (let i = 0; i < 100; ++i) {
  if (i % 3 === 0) {
    videoList.push({
      idx: i,
      thumbnail: require("../assets/thumb.png"),
      posterImg: require("../assets/profile1.png"),
      title: `제목입니다${i}`,
      viewCount: "35만",
    });
  } else if (i % 3 === 1) {
    videoList.push({
      idx: i,
      thumbnail: require(`../assets/thumb${2}.png`),
      posterImg: require("../assets/profile1.png"),
      title: `제목입니다${i}`,
      viewCount: "35만",
    });
  } else {
    videoList.push({
      idx: i,
      thumbnail: require(`../assets/thumb${3}.png`),
      posterImg: require("../assets/profile1.png"),
      title: `제목입니다${i}`,
      viewCount: "35만",
    });
  }
}

const useShorts = (count = 1) => {
  const [videoListState, setVideoListState] = React.useState();

  React.useEffect(() => {
    const tempList = [];
    for (let i = 0; i < count; ++i) {
      tempList.push(videoList[i]);
    }
    setVideoListState(tempList);
  }, [count]);

  return [videoListState];
};

export default useShorts;
