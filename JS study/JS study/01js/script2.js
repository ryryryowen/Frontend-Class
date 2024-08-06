//  사용자의 몸무게가 적정체중인가 ?
//  적정체중 = (본인의 . 키- 100) * 0.9 => 오차범위 5+-

const name = prompt("이름을 말씀해주세요 !", "ex. 홍길동");

const height = parseFloat(prompt("키가 어떻게 되실까요?", "ex. 173.4"));
const weight = parseFloat(prompt("몸무게가 어떻게 되실까요?", "ex 60,9"));

const normalWeight = (height - 100) * 0.9;
let result = weight >= normalWeight - 5 && weight <= normalWeight + 5;

result = result ? "적정체중입니다 !" : "적정체중이 아닙니다!";

alert(`${name}님은 ${result}`);
