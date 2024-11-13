import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: [
      {
        id: 1,
        text: "리액트 복습하기",
      },
      {
        id: 2,
        text: "포폴준비하기",
      },
    ],
    Doing: [],
    Done: [],
  },
});
