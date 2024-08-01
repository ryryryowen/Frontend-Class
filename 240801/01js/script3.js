// 현재 보고 있는 웹 브라우저 문서 내 버튼을 하나 만들어주세요 !!

//  그리고, 해당 버튼을 클릭할 때마다 색상이 변경되도록 해주세요.

//  변경되어야 하는 색상은 white, yello ,aqua , pupple 색상이며, 마지막 pupple 색상 다음번 색상은 첫번쨰 색상으로 white 색상으로 변경되어야 함,  (*무한변경)

// 함수!!
//  각각의 컬러를 배열 자료구조를 사용
//  배열 내 각각의 아이템은 index값을 가지고 있다.
//  0부터 시작 하는 인덱스값이 1개씩 증가해야한다.
//  증감연산자가 필요하다.
//  이벤트 (*클릭 했을때, click)

// document.body.innerHTML += `<button id="btn">Click!</button>`;

// const button = document.querySelector("#btn");

// const colors = ["white", "yellow", "aqua", "purple"]; // 색상 배열

// let currentColorIndex = 0;

// button.addEventListener("click", () => {
//   // 버튼의 배경색 변경
//   button.style.backgroundColor = colors[currentColorIndex];

//   // 다음 색상으로 인덱스 이동
//   currentColorIndex++;
//   if (currentColorIndex >= colors.length) {
//     currentColorIndex = 0;
//   }
// });

document.body.innerHTML += `<button id="btn">Click!</button>`;

const color = ["white", "yellow", "aqua", "purple"];

const button = document.querySelector("button");
let i = 0;

// 버튼 클릭 시 색상 변경
button.addEventListener("click", () => {
  changeColor();
});

// 자동으로 색상 변경 (1초마다)
setInterval(() => {
  changeColor();
}, 1000);

function changeColor() {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i]; // 'background' -> 'backgroundColor'
}
