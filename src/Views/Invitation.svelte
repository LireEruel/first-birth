<script>
  import cafe from "../assets/cafe_img.png";
</script>

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
