// try {
//   console.log("시작");
//   add();
//   console.log("실행중...");
//   console.log("끝");
//   // 실행시킬 코드!!!
// } catch (err) {
//   // try문을 실행시켰을, 어떤 에러사항이 발생될 경우 실행시킬 명령문
//   console.log(`오류발생 : ${err.name}`);
//   console.log(`오류발생 : ${err.message}`);
// }

// console.log("종료");

const json = '{"grade": 3, "age" : 25}'

try {
  const user = JSON.parse();
  if (!user.skill) throw "사용자스킬이 없습니다!";
} catch (err) {
  console.log(err);
}