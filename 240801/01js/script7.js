// 사용자로부터 2개의 숫자를 받습니다 !!!
// 2개의 숫자의 최대공약수를 찾아서 콘솔창에 출력 !!
//  최대공약수란 ?
//  복수의 숫자를 동시에 나눌수있는 수 중에서 가장 큰수 !!
//  예로 4와 12의 최대 공약수는 4입니다 !!

const num01 = Number(prompt("첫 번째 숫자를 입력하세요:"));
const num02 = Number(prompt("두 번째 숫자를 입력하세요:"));

function getGCD() {
  const max = num01 > num02 ? num01 : num02;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num01 % i === 0 && num02 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(` ${num01} 와 ${num02}의 최대공약수 ${getGCD()}`);
