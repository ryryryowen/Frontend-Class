import { motion } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

//  스타일 컴포넌트를 사용한다면 아래 방법을 사용하기
// 스타일 컴포넌트에 모션속성값을 주는방법
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        {/* <Box transtion={{ duration: 3 }} animate={{ borderRadius: "100px" }} /> */}
        {/* <Box
          transition={{ duration: 3, type: "spring", mass: 10, delay: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
        /> */}
        <Box variants={myVars} initial="start" animate="end" />
      </Wrapper>
    </>
  );
};

export default App;
