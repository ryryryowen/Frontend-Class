//  JS 변수 선언 var let const

// var
//  개발작업 = > 혼자 x || 공동 협업
// A개발 test = > 카운팅
// B개발 test = > 유효성
//  전역변수 / 지역변수

// let & const
// let "재선언은 불가능하지만 재할당은 가능"
// const "선언이나 재할당도 불가능한 안전한"

const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", () => {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  this.classList.toggle("active");
});
