<script>
  import profile from "../assets/profile.jpg";
</script>

<div>
  <h1 class="name">Shin Ryan</h1>
  <hr />
  <p class="info_text">
    세상에서 제일 귀여운 아가 리현이의 돌잔치에 여러분을 초대합니다! 다들 꼭
    와주셨으면 좋겠어요. 근데 아픈사람은 빼고요 우리 리현이 옮으면 안되거든요.
    저도 사실 리현이한테 코로나 옮길 뻔했는데 보고싶은 마음 참고 코로나
    검사받았는데 확진이었어요 휴. 그러니 여러분도 조심하세요 사실 이걸 참고한
    디자인 포맷이 4줄이 적혀있길래 뭐라도 적고있는데 사실 뭘 더 적어야하는지
    모르겠다. 언니 잘 지내지? 이 부분은 언니가 잘 적어줄거라 믿어 헤헤 나는 요즘
    이직하려고 이력서 쓰는 중이야. 리현이 걷는거 너무 귀여워서 용탁이한테도 언니
    인스타 영업했어 리현이 빨리 보고싶다 리현쨩 사랑해
  </p>
  <div class="profile-wrap">
    <img src={profile} alt="귀여운 리현이 사진관 사진" id="profile-img" />
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
    margin-bottom: 3%;
  }

  @media screen and (max-width: 500px) {
    .profile-wrap {
      display: flex;
      flex-direction: column;
    }
    #profile-img {
      width: 100%;
    }
  }

  @media screen and (min-width: 501px) {
    .profile-wrap {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    #profile-img {
      width: 30%;
    }
  }
  .profile-text {
    margin-left: 10%;
    text-align: start;
  }
</style>
