<script>
  import naverMap from "../assets/naver-map.png";
  import kakaoMap from "../assets/kakao-map.png";
  import googleMap from "../assets/google-map.png";
  const openNaver = () => {
    window.open("http://naver.me/xaCH2Mx9");
  };
  const openKaKao = () => {
    window.open("https://place.map.kakao.com/1249473173");
  };
  const openGoggle = () => {
    window.open("https://goo.gl/maps/aXsR3aQ7Xj8Qi14K9");
  };
</script>

<div>
  <h2>오시는 길</h2>
  <a href="http://naver.me/xaCH2Mx9">
    <img alt="naver-map" class="map-icon" src={naverMap} />
  </a>
  <a href="https://place.map.kakao.com/1249473173">
    <img alt="naver-map" class="map-icon" src={kakaoMap} />
  </a>
  <a href="https://goo.gl/maps/aXsR3aQ7Xj8Qi14K9">
    <img alt="naver-map" class="map-icon" src={googleMap} />
  </a>
  <div class="map-warrap">
    <div id="map" style="width:500px;height:400px;" />
  </div>
  <h2>카카오톡으로 공유하기</h2>
  <a id="create-kakaotalk-sharing-btn" href="javascript:;">
    <img
      src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      alt="카카오톡 공유 보내기 버튼"
    />
  </a>
  <script type="text/javascript">
    Kakao.Share.createCustomButton({
      container: "#create-kakaotalk-sharing-btn",
      templateId: 79754,
    });
  </script>
  <script>
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.526581182303026, 129.1031200003175), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var markerPosition = new kakao.maps.LatLng(
      37.526581182303026,
      129.1031200003175
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  </script>
</div>

<style>
  @font-face {
    font-family: amarillo;
    src: url(../assets/amarillo.ttf);
  }

  @font-face {
    font-family: meat_buckets;
    src: url(../assets/meat_buckets.ttf);
  }

  .map-warrap {
    display: flex;
    justify-content: center;
  }
  .map-icon {
    width: 48px;
    height: auto;
    margin-bottom: 2vh;
  }
  h2 {
    margin-top: 5vh;
  }
</style>
