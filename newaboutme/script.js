// 로딩창
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelectorAll(".loader").forEach(function (loader) {
      loader.style.display = "none";
    });
    document.body.style.background = "white"; // 배경색 변경
    document.getElementById("main-content").style.display = "block";
  }, 2000); // 2초
});

// typing dashborad
const content =
  "안녕하세요!✋\n프론트엔드 개발을 배우고있는\n 코딩 왕초보 해오름입니다 \n:D";

const text = document.querySelector(".text");
const cursor = document.querySelector(".blink");

let i = 0;

const typing = () => {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing, 250);
  } else {
    cursor.style.animation = "none";
    cursor.style.display = "none";
  }
};

typing();

// 스크롤바
let scrollTop = 0;
let bar = document.getElementsByClassName("bar-ing")[0];

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);

// about 슬라이드 이미지
// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// 모달창

const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
console.log(modalBox);
const close = document.querySelector("#close");
console.log(close);

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});
