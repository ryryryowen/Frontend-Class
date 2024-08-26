// geolocation = 사용자의 위치를 파악하기 위한 목적의 API
// getCurrentPosition(successCB, errorCB, option)

const getlocation = document.querySelector("#getlocation");
const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerHTML = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const erroPosition = (err) => {
  alert(err.message);
};

getlocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);

    const options = {
      enableHightAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      erroPosition,
      options
    );
    
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 10000);
  } else {
    alert("위치 서비스를 지원하지 않습니다");
  }
});
