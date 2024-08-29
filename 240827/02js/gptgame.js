const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let player = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  speed: 5,
  dy: 0,
  gravity: 0.5,
};
let obstacles = [];
let gameOver = false;

function drawPlayer() {
  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
  player.y += player.dy;
  player.dy += player.gravity;
  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
  }
}

function createObstacle() {
  const obstacle = {
    x: canvas.width,
    y: canvas.height - 50,
    width: 20,
    height: 50,
    speed: 5,
  };
  obstacles.push(obstacle);
}

function drawObstacles() {
  ctx.fillStyle = "#3498db";
  obstacles.forEach((obstacle) => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

function updateObstacles() {
  obstacles.forEach((obstacle, index) => {
    obstacle.x -= obstacle.speed;
    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(index, 1);
      score += 1;
      document.getElementById("score").innerText = `Score: ${score}`;
    }
  });
}

function checkCollision() {
  obstacles.forEach((obstacle) => {
    if (
      player.x < obstacle.x + obstacle.width &&
      player.x + player.width > obstacle.x &&
      player.y < obstacle.y + obstacle.height &&
      player.y + player.height > obstacle.y
    ) {
      gameOver = true;
    }
  });
}

function gameLoop() {
  if (gameOver) {
    ctx.fillStyle = "#ecf0f1";
    ctx.font = "48px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  updatePlayer();
  drawObstacles();
  updateObstacles();
  checkCollision();

  requestAnimationFrame(gameLoop);
}

function jump() {
  if (player.y === canvas.height - player.height) {
    player.dy = -10;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "ArrowUp") {
    jump();
  }
});

setInterval(createObstacle, 2000);

gameLoop();
