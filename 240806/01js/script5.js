const openbutton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

openbutton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

const closeButton = modalBox.querySelector("#profile > button");

closeButton.addEventListener("click", function () {
  openbutton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});

//  1. 최초에 보여줘야하는 UI 디자인

//   2. 모다ㅣㄹ창이 오픈되었을 때에 보여줘야 하는 UI 디자인

//  3. JS 를 활용해서 위 2개의 디자인 요소를 어떻게 크로스 할것인가?
