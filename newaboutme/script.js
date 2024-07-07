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

// 슬라이드 이미지 project
document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelector(".controls");
  const prevBtn = btns.querySelector(".prev");
  const nextBtn = btns.querySelector(".next");

  const slides = document.querySelector(".slides");
  const slide = slides.querySelectorAll("li");

  const slideCount = slide.length;
  const slideWidth = 200;
  const slideMargin = 30;

  let currentIdx = 0;

  // 복제한 5개의 li 노드를 왼쪽으로 이동시키기 위한 함수
  const updateWidth = () => {
    const currentSlides = document.querySelectorAll(".slides li");
    const newSlideCount = currentSlides.length;
    slides.style.width = `${
      (slideWidth + slideMargin) * newSlideCount - slideMargin
    }px`;
  };

  // 복제한 5개의 li 노드를 왼쪽으로 이동시키기 위한 함수(2)
  const setInitialPos = () => {
    const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = `translateX(${initialTranslateValue}px)`;
  };

  // li 노드를 복제하기 위한 함수
  const makeClone = () => {
    for (let i = 0; i < slideCount; i++) {
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      slides.appendChild(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
      const cloneSlide = slide[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      slides.prepend(cloneSlide);
    }

    updateWidth();
    setInitialPos();
    setTimeout(() => {
      slides.classList.add("animated");
    }, 100);
  };

  makeClone();

  // 슬라이드 이동을 처리하는 함수
  const moveSlide = (num) => {
    slides.style.transition = "transform 0.5s ease-out";
    const newTransform = -(slideWidth + slideMargin) * (num + slideCount);
    slides.style.transform = `translateX(${newTransform}px)`;
    currentIdx = num;

    // 복제 슬라이드일 경우 원래 위치로 돌아가기
    if (currentIdx >= slideCount || currentIdx <= -slideCount) {
      setTimeout(() => {
        slides.style.transition = "none";
        slides.style.transform = `translateX(${
          -(slideWidth + slideMargin) * slideCount
        }px)`;
        currentIdx = 0;
      }, 500);
    }
  };

  // 버튼 클릭 이벤트 함수
  nextBtn.addEventListener("click", () => {
    moveSlide(currentIdx + 1);
  });

  prevBtn.addEventListener("click", () => {
    moveSlide(currentIdx - 1);
  });

  // 자동슬라이드 및 정지 기능 함수
  let timer;

  const autoSlide = () => {
    if (!timer) {
      timer = setInterval(() => {
        moveSlide(currentIdx + 1);
      }, 3000);
    }
  };

  const stopSlide = () => {
    clearInterval(timer);
    timer = null;
  };

  slides.addEventListener("mouseenter", stopSlide);
  slides.addEventListener("mouseleave", autoSlide);
  btns.addEventListener("mouseenter", stopSlide);
  btns.addEventListener("mouseleave", autoSlide);

  autoSlide();
});
