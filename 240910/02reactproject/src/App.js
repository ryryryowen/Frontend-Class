import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostWritePage from "./compornent/page/PostWritePage";
import MainPage from "./compornent/page/MainPage";
import PostViewPage from "./compornent/page/PostViewPage";

const MainTitleText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>훈동 BLOG</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
