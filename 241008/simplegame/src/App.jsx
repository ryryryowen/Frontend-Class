import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Box from "./components/Box";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 30px;
`;

const BoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 80px;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const choice = {
  rock: {
    name: "rock",
    img: "https://cdn.travie.com/news/photo/202403/52256_32104_544.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://m.mediwe.co.kr/web/product/medium/20191114/3fafdafcc2397e751beaa6b8734e5a0d.jpg",
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3G3D1wPW85rqDsfWo2UVX8ssxLyZWrOdhg&s",
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "WIN" : "LOSE";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "WIN" : "LOSE";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "WIN" : "LOSE";
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BoxGroup>
          <Box title={"You"} item={userSelect} result={result} />
          <Box title={"Computer"} item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>Scissors</Button>
          <Button onClick={() => play("rock")}>Rock</Button>
          <Button onClick={() => play("paper")}>Paper</Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default App;

// 컴퓨터와 하는 가위바위보 대결
// 컴퓨터는 컴퓨터대로의 선택, 나의 선택도 필요(가위바위보의 선택지를 선택할 버튼 필요)
// 출력공간 필요
// 이벤트와 콜백을 사용할 것이므로 당연히 상태관리 필요 → state 사용
