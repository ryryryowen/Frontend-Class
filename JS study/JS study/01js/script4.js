//  사용자로부터 3개의 값을 받으세요 !!

//  교통비 , 식대 , 음료비

//  위 3개의 값이 10,000원을 초과한다면 "예산관리 잘해주쇼"
//  위 3개의 값이 10,000원을 이하라면 "예산관리 잘했누"

let arr = [];
for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력 !"));
  arr.push(userNum);
}

const [traffic, food, drink] = arr;
const sum = traffic + food + drink;

if (isNaN(sum) || sum === 0) {
  alert("잘못입력했누~!");
} else if (sum <= 10000) {
  alert("예산관리 잘했누~!");
} else {
  alert("에산관리 잘좀하쇼");
}
