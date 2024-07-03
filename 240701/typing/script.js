//  문장중 \n << 줄바꿈
const content =
  "Hi!🖐 I'm Owen, \n Front-End Developer. \n Welcome to My World :D";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

//  특정주기에 맞춰서 무엇을 실행시킬떄
setInterval(typing, 190);
