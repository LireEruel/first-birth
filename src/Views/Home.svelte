<script>
  import profile from "../assets/profile.jpg";
  import cafe from "../assets/cafe_img.png";
  import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
</script>

<div class="root">
  <div id="top_view" use:scrollRef={"main"}>
    <h1 class="title">sin ri hyeon birthday</h1>
  </div>
  <nav class="navigation">
    <a use:scrollTo={{ ref: "main", duration: 1500 }} href="main" class="navi"
      >Home</a
    >
    <a use:scrollTo={{ ref: "baby", duration: 1500 }} href="#baby" class="navi"
      >baby</a
    >
    <a
      use:scrollTo={{ ref: "invitation", duration: 1500 }}
      href="#invitation"
      class="navi">invitation</a
    >
    <a class="navi">Message</a>
    <a class="navi">Photo</a>
  </nav>
  <section class="section-baby" use:scrollRef={"baby"}>
    <h1 class="name">sin li hyeon</h1>
    <hr />
    <p class="info_text">
      세상에서 제일 귀여운 아가 리현이의 돌잔치에 여러분을 초대합니다! 다들 꼭
      와주셨으면 좋겠어요. 근데 아픈사람은 빼고요 우리 리현이 옮으면 안되거든요.
      저도 사실 리현이한테 코로나 옮길 뻔했는데 보고싶은 마음 참고 코로나
      검사받았는데 확진이었어요 휴. 그러니 여러분도 조심하세요 사실 이걸 참고한
      디자인 포맷이 4줄이 적혀있길래 뭐라도 적고있는데 사실 뭘 더 적어야하는지
      모르겠다. 언니 잘 지내지? 이 부분은 언니가 잘 적어줄거라 믿어 헤헤 나는
      요즘 이직하려고 이력서 쓰는 중이야. 리현이 걷는거 너무 귀여워서
      용탁이한테도 언니 인스타 영업했어 리현이 빨리 보고싶다 리현쨩 사랑해
    </p>
    <div class="profile-wrap">
      <img src={profile} alt="귀여운 리현이 사진관 사진" width="500" />
      <div class="profile-text">
        <h1>신리현 ♂</h1>
        <p>===</p>
        <p>2021-08-26~</p>
        <p>말띠</p>
        <p>사자 자리</p>
        <p>특징 : 귀여움</p>
        <p>능력 : 걷기, '잘' 자기, 웃기</p>
      </div>
    </div>
  </section>
  <section use:scrollRef={"invitation"} class="section-invitation">
    <h1 class="name">invitation</h1>
    <hr />
    <div class="card">
      <img src={cafe} alt="카페 이미지" />
      <div class="card-text">
        <h3>돌잔치</h3>
        <p class="card-subtext">동해 뉴동해관광호텔 1F 두다트</p>
        <p class="card-subtext">2022년 8월 27일, 5:00PM</p>
      </div>
    </div>
    <div>
      <div class="map-warrap">
        <h2>오시는 길</h2>
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
  </section>
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

  .root {
    margin: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  #top_view {
    background-image: url("../assets/top_image.jpg");
    width: 100%;
    height: 100vh;
    align-self: center;
    margin: 0;
    background-size: cover;
    top: 0;
  }
  .root:focus {
    outline: 0;
  }
  .title {
    color: white;
    font-family: amarillo;
    letter-spacing: 0.3rem;
    padding-top: 5%;
    margin: 0;
    cursor: default;
    font-size: 40px;
  }
  .title:focus {
    outline: 0;
  }
  .navigation {
    font-family: "Times New Roman", Times, serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: whitesmoke;
    font-size: larger;
    scroll-behavior: smooth;
    position: sticky;
    top: 0;
    background-color: #e8c599;
  }
  .section-baby {
    background-color: #fffbe8;
    padding: 5%;
  }
  .navi {
    margin: 1%;
    cursor: default;
    opacity: 0.8;
    transition: all 0.5s;
    text-decoration: none;
    color: white;
  }

  .navi:hover {
    color: white;
    opacity: 1;
  }
  .navi:hover::after {
    width: 100%;
  }
  .navi::after {
    content: "";
    display: block;
    border-bottom: 2px solid #fff;
    transition: all 250ms ease-out;
    left: 50%;
    width: 0;
  }

  #main {
    padding-top: 5%;
    scroll-behavior: smooth;
  }

  .name {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }

  hr {
    width: 30%;
    height: 3px;
    background-color: black;
  }

  .info_text {
    width: 67%;
    margin: auto;
    padding-top: 2%;
    font-family: "Noto Serif KR";
    margin-bottom: 3%;
  }
  .profile-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .profile-text {
    margin-left: 3%;
    text-align: start;
  }
  a {
    transform-style: preserve-3d;
    transition: 0.4s;
  }
  .map-warrap {
    display: flex;
    justify-content: center;
    padding: 5%;
  }
  .section-invitation {
    padding: 5%;
  }
  .card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5vh;
  }
  .card-text {
    text-align: start;
    margin-left: 5vw;
    padding-top: 2ch;
  }
  .card-subtext {
    margin-left: 1vw;
    color: #6c757d !important;
  }
</style>
