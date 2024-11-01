import React, { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

// interface Props {
//   onAdd: (toDo: string) => void;
// }

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onClose = () => {
    setShowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
