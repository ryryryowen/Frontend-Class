const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  //   window.open("경로", "팝업이름", "팝업창 옵션 => 어떤 너비, 높이 // 위로 && 좌측" )
  window.open("./notice.html", "popup", "width=600 height=500");
});
