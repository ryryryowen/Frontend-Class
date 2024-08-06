// 사용자에게 숫자 1개를 받습니다!!!
// 해당 숫자가 짝수인지 홀수인지 확인하여, 짝수라면 알림창에 "짝수" 출력 !!! 만약 홀수라면 알림창에 "홀수" 출력 !!
//  짝수는 반드시 2로 나누어 떨어집니다.
//  홀수는 2로 나눴을때 반드시 나머지가 존재
// 단, 사용자가 취소 버튼을 클릭할 수 있다는 것을 감안하여 예외조항 처리를 반드시 해주세요 !
//  반드시 삼항조건연산자로

// 삼항조건연산자
// small = num1 < num2 ? num1 : num2;

// const userInput = prompt("숫자를 입력해주세요");

// if (userInput !== null) {
//   const number = parseInt(userInput, 10);

//   const message = isNaN(number)
//     ? "유효한 숫자를 입력해주세요."
//     : number % 2 === 0
//     ? "짝수"
//     : "홀수";

//   alert(message);
// } else {
//   alert("취소되었습니다");
// }

let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== null) {
  userNumber = parseInt(userNumber);
  userNumber % 2 === 0 ? alert(`${userNumber} : 짝수`) : alert(`${userNumber} : 홀수`)
}