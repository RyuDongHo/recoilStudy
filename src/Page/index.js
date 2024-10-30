import React from "react";
import VideoListPage from "./VideoListPage";
import VideoDetail from "./VideoDetailPage";
import ShortsPage from "./ShortsPage";
import SignUpPage from "./SignUpPage";
import Aside from "./ui/Aside";
import { Routes, Route } from "react-router-dom";

const Page = () => {
  // 이런 건 shared로 뺄 수 있다.

  return (
    <main style={{ display: "flex" }}>
      <Aside />
      {/* Aside가 segment가 아니라 layer로 사용되고 있음 <- ui에 있을 필요 없음*/}
      <Routes>
        <Route path="/" element={<VideoListPage />} />
        <Route path="/video-detail/:id" element={<VideoDetail />} />
        <Route path="/shorts/:id" element={<ShortsPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </main>
  );
};

export default Page;
