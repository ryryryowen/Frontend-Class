const botton = document.querySelector("button");

const buttonAction = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
};

botton.addEventListener("click", buttonAction);
