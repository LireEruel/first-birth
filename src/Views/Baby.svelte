<script>
  import profile from "../assets/profile.jpg";
</script>

<div>
  <h1 class="name">Shin Ryan</h1>
  <hr />
  <p class="info_text" />
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
