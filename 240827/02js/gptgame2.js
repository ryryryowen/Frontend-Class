const gameArea = document.getElementById("gameArea");
const message = document.getElementById("message");

let startTime;
let reactionTime;

function getRandomTime() {
  return Math.floor(Math.random() * 3000) + 2000; // 2초에서 5초 사이의 랜덤 시간
}

function startGame() {
  gameArea.style.backgroundColor = "#3498db"; // 초기 색상 (파란색)
  message.textContent = "Wait for green...";

  setTimeout(() => {
    startTime = Date.now();
    gameArea.style.backgroundColor = "#2ecc71"; // 반응을 유도하는 색상 (초록색)
    message.textContent = "Click now!";
  }, getRandomTime());
}

function endGame() {
  reactionTime = (Date.now() - startTime) / 1000; // 반응 시간을 초 단위로 계산
  message.textContent = `Your reaction time is ${reactionTime} seconds. Click to play again!`;
  startTime = null; // 게임이 끝나면 시작 시간을 초기화
}

gameArea.addEventListener("click", () => {
  if (startTime) {
    endGame();
  } else {
    startGame();
  }
});

// 게임이 시작되도록 첫 클릭을 유도하는 메시지를 표시
message.textContent = "Click to start the game!";
