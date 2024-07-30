// 메시지 출력 간단식으로 변경한 방법
// 문자열 제거 작업없이 바로 숫자로 변환하는방법

// const bus = prompt("교통비를 적어주세요", "3000");
// const food = prompt("식대를 적어주세요", "2000");
// const drink = prompt("음료비를 적어주세요", "1000");

// 입력받은 값을 숫자로 변환
// const busCost = Number(bus);
// const foodCost = Number(food);
// const drinkCost = Number(drink);

// // 합계 계산
// const totalCost = busCost + foodCost + drinkCost;

// // 삼항 연산자를 이용한 메시지 생성
// const result = totalCost > 10000 ? "예산관리 잘해주세요!" : "예산관리 잘하셨어요!";

// alert(result);

const bus = prompt("교통비를 적어주세요", "ex.3,000원");
const food = prompt("식대를 적어주세요", "ex.2,000원");
const drink = prompt("음료비를 적어주세요", "ex.1,000원");

// 입력받은 값을 숫자로 변환
const busCost = parseInt(bus.replace(/[^\d]/g, ""));
const foodCost = parseInt(food.replace(/[^\d]/g, ""));
const drinkCost = parseInt(drink.replace(/[^\d]/g, ""));

// 합계 계산
const totalCost = busCost + foodCost + drinkCost;

// 삼항 연산자를 이용한 메시지 생성
const result =
  totalCost > 10000 ? "예산관리 잘해주세요 !" : "예산관리 잘하셨어요 !";

alert(result);
