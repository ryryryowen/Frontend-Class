import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 4px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "World!" }: CircleProps) => {
  const [conter, setCounter] = useState<number | string>(1);
  setCounter("1");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text} {conter}
    </Container>
  );
};

export default Circle;
