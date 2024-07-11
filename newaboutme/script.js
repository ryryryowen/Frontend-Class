// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// typing dashborad
const content =
  "안녕하세요!✋\n프론트엔드 개발을 배우고있는\n 코딩 왕초보 해오름입니다 \n:D";

const text = document.querySelector(".text");
const cursor = document.querySelector(".blink");

let i = 0;
let isTyping = true;

const typing = () => {
  if (i < content.length && isTyping) {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing, 150);
  } else {
    isTyping = false;
    setTimeout(deleteText, 1000);
  }
};

const deleteText = () => {
  let textContent = text.innerHTML;
  let length = textContent.length;

  if (!isTyping) {
    if (length > 0) {
      text.innerHTML = textContent.slice(0, -1);
      setTimeout(deleteText, 50);
    } else {
      isTyping = true;
      i = 0;
      setTimeout(typing, 200);
    }
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

// 슬라이드 이미지

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".main_slide ul li");
  const leftArrow = document.querySelector(".slide_arrow.left");
  const rightArrow = document.querySelector(".slide_arrow.right");
  const pagers = document.querySelectorAll(".main_slide_pager span");

  let currentIndex = 0;

  // Function to show the slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    pagers.forEach((pager, i) => {
      if (i === index) {
        pager.classList.add("active");
      } else {
        pager.classList.remove("active");
      }
    });
  }

  // Function to go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Function to go to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Add event listeners for arrows
  leftArrow.addEventListener("click", prevSlide);
  rightArrow.addEventListener("click", nextSlide);

  // Add event listeners for pagers
  pagers.forEach((pager, i) => {
    pager.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Initial slide
  showSlide(currentIndex);
});
