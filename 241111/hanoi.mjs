const hanoi = (count, from, to, temp) => {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}을 ${from}에서 ${to}으로 이동!`);
  hanoi(count - 1, temp, to, from);
}

hanoi(3, "A", "B", "C");


// const hanoi1= (3, A, C, B) => {
//   if (3 === 0) return;
//   hanoi(3 - 1, A, B, C);
//   console.log(`원반 ${3}을 ${A}에서 ${C}으로 이동!`);
//   hanoi(3 - 1, B, C, A);
// }

//     const hanoi2 = (2, A, B, C) => {
//   if (1 === 0) return;
//   hanoi(1 - 1, A, C, B);
//   console.log(`원반 ${1}을 ${A}에서 ${B}으로 이동!`);
//   hanoi(1 - 1, C, B, A);
// }

// const hanoi3 = (1, B, C, A) => {
//   if (1 === 0) return;
//   hanoi(1 - 1, B, A, C);
//   console.log(`원반 ${1}을 ${B}에서 ${C}으로 이동!`);
//   hanoi(1 - 1, A, C, B);
// }