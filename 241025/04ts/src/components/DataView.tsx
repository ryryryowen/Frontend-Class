import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;



const DataView = () => {
  return (
    <Container>
      <Title label={"할 일 목록"} />
      <TodoList />
    </Container>
  );
};

export default DataView;
