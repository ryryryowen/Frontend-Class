// 메세지 출력 간단식으로 변경한 방법
//  문자열 제거 작업 없이 바로. 숫자로 변환하는 방법

const bus = prompt("교통비를 적어주세요", "3000");
const food = prompt("식비를 적어주세요", "4000");
const drink = prompt("음료비를 적어주세요", "1000");

// 입력받은 값을 숫자로 변환
const busCost = Number(bus);
const foodCost = Number(food);
const drinkCost = Number(drink);

// 합계 계산
const totalCost = busCost + foodCost + drinkCost;

// 삼항 연산자를 이용한 메시지 생성
const result = totalCost > 10000 ? "예산관리 못했어요" : "예산관리 잘했어요";

alert(result);
