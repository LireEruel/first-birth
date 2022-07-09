<div>
  <h2>오시는 길</h2>
  <div class="map-warrap">
    <div id="map" style="width:500px;height:400px;" />
  </div>
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
  h2 {
    margin-top: 5vh;
  }
</style>
