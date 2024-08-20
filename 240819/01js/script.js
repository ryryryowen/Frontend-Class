const origin = document.querySelector("#origin");
const result = document.querySelector("#result");
// 배열의 경우 반복문 사용할 가능성 높음=> 복수로 쓰기
let numbers = [2, 4, 6, 8, 10];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const showArray = (area, arr) => {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += `<td>${arr[i]}</td>`;
  }
  str += "</tr></table>";
  area.innerText = str;
};
showArray(origin, numbers);

numbers.push(sum);
showArray(result, numbers);
