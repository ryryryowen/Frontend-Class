const side1 = Number(prompt("첫 번째 변의 길이를 입력하세요:"));
const side2 = Number(prompt("두 번째 변의 길이를 입력하세요:"));
const side3 = Number(prompt("세 번째 변의 길이를 입력하세요:"));

function canTg(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

const minSide = Math.min(side1, side2, side3);

if (canTg(side1, side2, side3)) {
  console.log("YES");
} else {
  console.log("NO");
}
