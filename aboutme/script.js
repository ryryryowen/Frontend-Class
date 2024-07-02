//  Navbar Toggle Btn
const toggleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const code = document.querySelector(".navbar_code");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  code.classList.toggle("active");
});
