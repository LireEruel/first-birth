<script>
  import cafe from "../assets/cafe_img.png";
  import WayToCome from "./WayToCome.svelte";
</script>

<div class="root">
  <h1 class="title">invitation</h1>
  <hr />

  <h1 class="sub-title">리현이의 첫번째 생일에 초대합니다</h1>
  <p class="sub-text">D+367</p>
  <p class="sub-text">2.5kg이 5kg이 되는데 걸린 시간</p>
  <div class="card">
    <img src={cafe} alt="카페 이미지" />
    <div class="card-text">
      <h3>돌잔치</h3>

      <p class="card-subtext">동해 뉴동해관광호텔 1F 두다트</p>
      <p class="card-subtext">2022년 8월 27일, 5:00PM</p>
    </div>
  </div>
  <WayToCome />
</div>

<style>
  .root {
    font-family: "noto_serif_kr";
  }
  .title {
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
  .sub-text {
    margin: 0;
    color: #6c757d !important;
    font-size: medium;
  }

  .sub-title {
    font-family: "noto_serif_kr";
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
