const toggleBtn = document.querySelector(".header_toogleBtn");
const menu = document.querySelector("..gnb");
const code = document.querySelector(".header_icon");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  code.classList.toggle("active");
});
