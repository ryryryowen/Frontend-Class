// 끝말잇기 게임

// 1. 제시어의 끝단어 확인

// 1_1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함!
// 1_2. 3_1에서 이벤트의 시작을 알리는 "입력버튼"이 무엇인지 알려줘야함!

// 2.  끝단어로 시작하는 단어를 입력

// 2_1. 사용자가 입력한 단어 무엇인지를 알아야함!!
// 2_2. 끝단어로 시작하는 단어 == 제시어의 끝단어

// 3. 단어 입력 후 입력버튼

// 3_1. 입력버튼이 클릭 => 검증 (* 이벤트 필요 )

//  4. 문제 여부 판단 => 문제없다!!! 문제있다!!!

// 4_1. 조건에 따라서 값을 어떻게 출력 할것인가?

const word = document.querySelector("#word");
const mywordInput = document.querySelector("#myword");
const form = document.querySelector(".word_text form");
const resultMessage = document.querySelector("#result");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;

word.innerText = "숫자 맞추기 게임: 1부터 100 사이의 숫자를 맞춰보세요!"; // 안내 문구로 변경

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userGuess = parseInt(mywordInput.value); // 기존 input 필드를 활용하여 숫자를 입력받음

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultMessage.textContent = "1부터 100 사이의 숫자를 입력하세요!";
    return;
  }

  remainingAttempts--;

  if (userGuess === randomNumber) {
    resultMessage.textContent = "정답입니다! 축하합니다!";
    mywordInput.disabled = true; // 입력 비활성화
    form.innerHTML += `<button id="resetButton">게임 다시 시작</button>`; // 리셋 버튼 추가
    document.getElementById("resetButton").addEventListener("click", resetGame);
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = "더 높은 숫자를 입력해보세요.";
  } else {
    resultMessage.textContent = "더 낮은 숫자를 입력해보세요.";
  }

  word.innerText = `남은 기회: ${remainingAttempts}`;

  if (remainingAttempts === 0 && userGuess !== randomNumber) {
    resultMessage.textContent = `기회를 모두 사용했습니다. 정답은 ${randomNumber}였습니다.`;
    mywordInput.disabled = true; // 입력 비활성화
    form.innerHTML += `<button id="resetButton">게임 다시 시작</button>`; // 리셋 버튼 추가
    document.getElementById("resetButton").addEventListener("click", resetGame);
  }
});

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  remainingAttempts = 10;
  mywordInput.value = "";
  resultMessage.textContent = "";
  word.innerText = "숫자 맞추기 게임: 1부터 100 사이의 숫자를 맞춰보세요!";
  mywordInput.disabled = false;
  document.getElementById("resetButton").remove(); // 리셋 버튼 제거
}

// Lotto Game

//  1부터 45까지의 6개의 숫자가 랜덤으로 중복없이 동시에 추출이되어야 함

// 1. 클릭 버튼이 무엇인지 컴퓨터에게 알려줘야 함

// 2. 클릭! 버튼 클릭 시, 숫자 생성되어야 함 (*이벤트)

//  3.  JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3_1. random() => 0~1미만의 실수 & 난수 생성 !!
// 0.9999999999999999 * 45 || 44
// (*실수 : 소수점을 가지고 있는 숫자)
//  (*난수 : 불규칙적으로 숫자를 생성하는 행위)
//  (*소수점을 없애야하는 필요 : floor() => 소수점을 버림)
// ceil() => 소수점을 올림 // round() => 소수점을 반올림)

//  4. 중복x
//  4_1. set() 클래스 = > 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 중복된 값이 생성되는 경우, 1개로 합쳐주는 역활
// 4_2. 6개의 숫자 완성 = > 2번째 & 4번째 숫자, 같은 경우
// 조건문 => 재추첨을 하겠습니다 !!

// 구조 분해 할당
//   function startLotto() {
//   const { digitCount, maxNumber } = luckyNumber;
//   }

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

class lottoTest {
  constructor(width, heiht) {
    this.width = width;
    this.heiht = heiht;
  }
}

const lottoTest2 = new lottoTest(300, 150);

// 구조 분해 할당
const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;

  let myNumber = new Set();
  console.log(myNumber);
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다!";
  }
};

lottoButton.addEventListener("click", startLotto);
