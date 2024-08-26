const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

// LocalStorage에서 저장된 할 일 목록 가져오기
const getLocal = () => {
  let todosBox;

  // LocalStorage에 "todos" 키가 없으면 빈 배열 생성
  if (localStorage.getItem("todos") === null) {
    todosBox = [];
  } else {
    // LocalStorage에서 할 일 목록을 가져와 배열로 변환
    todosBox = JSON.parse(localStorage.getItem("todos"));
  }

  // 각 할 일 항목을 DOM에 추가
  todosBox.forEach((usertodo) => {
    const newLi = document.createElement("li");

    newLi.className = "todo";
    newLi.innerHTML = `
      <span class="todoContent">${usertodo}</span>
      <button class="completeBtn">완료</button>
      <button class="deleteBtn">삭제</button>
    `;

    todos.appendChild(newLi);
  });
};

// 페이지가 로드될 때 LocalStorage에서 할 일 목록을 가져옴
document.addEventListener("DOMContentLoaded", getLocal);

// 새로운 할 일 목록을 LocalStorage에 저장
const saveLocal = (todo) => {
  let todos;

  // LocalStorage에 "todos" 키가 없으면 빈 배열 생성
  if (localStorage.getItem("todos") === null) todos = [];
  // LocalStorage에서 할 일 목록을 가져와 배열로 변환
  else todos = JSON.parse(localStorage.getItem("todos"));

  // 새로운 할 일을 배열에 추가하고 LocalStorage에 저장
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 폼 제출 시 새로운 할 일 항목을 추가
const addTodo = (e) => {
  e.preventDefault();

  if (todoItem.value !== "") {
    const newLi = document.createElement("li"); // newLi 변수를 선언

    newLi.className = "todo";
    newLi.innerHTML = `
      <span class="todoContent">${todoItem.value}</span>
      <button class="completeBtn">완료</button>
      <button class="deleteBtn">삭제</button>
    `;

    // 새 할 일을 DOM에 추가하고 LocalStorage에 저장
    todos.appendChild(newLi);
    saveLocal(todoItem.value);

    // 입력 필드 초기화
    todoItem.value = "";
  }
};

const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  const index = todosItem.indexOf(todo.children[0].innerText);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
};

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];
  if (whichButton === "completeBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);

// 폼 제출 이벤트 리스너 추가
form.addEventListener("submit", addTodo);
