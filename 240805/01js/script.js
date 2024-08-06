// Sticky Event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 310) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");

// 최초 터치 및 마우스다운 지점
let startX = 0;

// 현재 이동중인 지점
let nowX = 0;

// 터치 종료 지점
let endX = 0;

// 두번쨰 터치 지점
let listX = 0;

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  console.log(window.getComputedStyle(hashContent).transform);
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
