// typng dashboard
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




//  Navbar Toggle Btn
const toggleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const code = document.querySelector(".navbar_code");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  code.classList.toggle("active");
});

