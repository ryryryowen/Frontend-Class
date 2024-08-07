// 각 텍스트 링크에 대한 이벤트 리스너를 추가합니다.
const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem, index) => {
  liItem.addEventListener("mouseenter", function () {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });

  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
