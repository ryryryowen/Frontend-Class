//  자바스크립트 for문을 활용해서 구구단 2단 부터 9단까지 웹브라우저 화면출력

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; i <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>${a}단</h2>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x ${b} = ${a * b}<br/>`);
  }
  document.write("<br/>");
}
