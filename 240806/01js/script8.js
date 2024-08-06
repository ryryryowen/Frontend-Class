document.querySelector("p").addEventListener("click", () => {
  console.log("p");
});

document.querySelector("section").addEventListener("click", () => {
  console.log("section");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("div");
});

// function testFnc() {
//   alert("시작");
// }

// testFnc();

const elements = document.querySelectorAll("*");

elements.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.cuttentTarget : ${e.currentTarget.tagName}`
    );
  });
});
