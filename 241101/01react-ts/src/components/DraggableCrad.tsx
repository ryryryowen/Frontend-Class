import React from "react";
import { Draggable, Id } from "react-beautiful-dnd";
import styled from "styled-components";

interface DraggingProps {
  isDragging: boolean;
}

interface DraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const Card = styled.div<DraggingProps>`
  background: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  width: 480px;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0, 0.5)" : "none"};
`;
const DraggableCard = ({ toDoId, toDoText, index }: DraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};
export default React.memo(DraggableCard);
