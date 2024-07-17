// 1.card_item 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고싶다

//  1_1. 웹 브라우저 > card_item들이 어떤 요소들인지 알게끔 도와줘야함

// 1_1_1. 웹 브라우저는 DOM 객체 모델을 갖고 있으니까 해당 DOM 에서 card_item들의 Node를 찾아와야겠다.

//  1_1_1_1. DOM 에서 원하는 Node를 찾아오려면 querySelector() 혹은 getElemenById()등의 함수를 사용할 수 있다

//  1_2. card_item이 1개 아니라, 총 5개이며, 이5개 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야한다

// 2. 만약 마우스가 A item 위에 있다가, B item 으로 이동하게 된다면, A item은 다시원래의 위치로 돌아오게 하고 싶고, B item은 위쪽으로 올라오게 하고 싶다

const items = document.querySelectorAll("#card_items li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all 0.5s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

// 1. 컴퓨터에게 상단 nav ul & li 태그를 인지시켜줘야한다.

//  2. 상단 nav요소에게 마우스를 오버하면 이벤트가 실행된다.

// 2_1.active 가상클래스가 실행(*텍스트가 검정색 & 두꺼워진다)

// 2_2. 하단에 lnb요소의 opactity Value 1이 되어야한다.

//  3. mouseleave ll mouseout 기능을 활용해서 마우스가 옆에 있는 li태그로 이동을하면 기존에 이벤트는 제거 // 신규이벤트가 이전에 설정했던 기능을 그대로 구현 !!

const gnbLi = document.querySelectorAll(".topNav > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background image change

const bgImgs = ["bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png"];

const bgImg = document.querySelector("#background_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[0]})`;

const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    console.log(firstData);

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        contentTit.innerText = title;
        contentDesc.innerText = description;
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(./img/${bgImgs[index]})`;
      });
    });
  });

// slide

const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

//  복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${(slideWidth + slideMargin) * newSlideCount - slideMargin}
}px`;
  slides.computedStyleMap.width = newWidth;
};

// 복제한 5개의 li 노드를 왼쪽으로 이동시키기 위한 함수(2)
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

//  li 노드를 복제하기 위한 함수
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

//  버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//  버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

// 자동슬라이드 및 정지 기능 함수

let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
