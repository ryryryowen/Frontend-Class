const showPos = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=Wq0N2tzzJC6wiC2Yks2V3DsuxOJ%252FxRnaBmGijkqDMCipd9MuG2QgKGypy7bFJozAs7cxi80kDE46hEBLBI1%252Fmw%253D%253D&_type=json";
  // fetch(url)
  // .then((response) =>response.json())
  // .then((json)=>console.log(json))
  const { latitude, longitude } = position.coords;
  const container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스
  const mapOption = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  const map = new kakao.maps.Map(container, mapOption); //지도 생성 및 객체 리턴
  // 마커 클러스터러를 생성합니다
  var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 10, // 클러스터 할 최소 지도 레벨
  });
  const positions = [
    {
      title: "약수역",
      latlng: new kakao.maps.LatLng(37.554347, 127.011001),
    },
    {
      title: "카페변해오름",
      latlng: new kakao.maps.LatLng(37.5545732, 127.0096195),
    },
    {
      title: "약수 이디야",
      latlng: new kakao.maps.LatLng(37.5545196, 127.0116098),
    },
    {
      title: "리사르 커피",
      latlng: new kakao.maps.LatLng(37.5524436, 127.0104206),
    },
    {
      title: "역곡역",
      latlng: new kakao.maps.LatLng(37.4851398, 126.8116223),
    },
  ];
  let markers = [];
  for (let i = 0; i < positions.length; i++) {
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
    });
    markers.push(marker);
    const infowindow = new kakao.maps.InfoWindow({
      constent: positions[i].title,
    });
    const makeOverListener = () => {
      return () => {
        infowindow.open(map, marker);
      };
    };
    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }
  // 클러스터러에 마커들을 추가합니다
  clusterer.addMarkers(markers);
};
const errPos = (err) => {
  alert(err.message);
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPos, errPos);
} else {
  alert("Geolocation is not available");
}
