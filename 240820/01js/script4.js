const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "광교역";
  yield "광교중앙역";
  yield "상현역";
  yield "성북역";
  yield "수지구청역";
  yield "동천역";
  yield "미금역";
  yield "정자역";
  yield "강남역";
  yield "신논현역";
}

const sinbundang = train();

button.addEventListener("click", () => {
  let current = sinbundang.next();

  if (current.done !== true) result.innerText = current.value;
  else {
    result.innerText = "종점입니다!";
    button.setAttribute("disabled", "disabled");
  }
});
