<script>
  import photo_0 from "../assets/photo_0.jpg";
  import photo_1 from "../assets/photo_1.jpg";
  import photo_2 from "../assets/photo_2.jpg";
  import photo_3 from "../assets/photo_3.jpg";
  import photo_4 from "../assets/photo_4.jpg";
  import photo_5 from "../assets/photo_5.jpg";
  import photo_6 from "../assets/photo_6.jpg";
  import photo_7 from "../assets/photo_7.jpg";
  import photo_8 from "../assets/photo_8.jpg";
  import photo_9 from "../assets/photo_9.jpg";
  import photo_10 from "../assets/photo_10.jpg";
  import photo_11 from "../assets/photo_11.jpg";
</script>

<div>
  <div class="root">
    <div class="title-wrap">
      <h1 class="title">Photo</h1>
      <hr />
    </div>

    <div class="horizontal-scroll-wrapper">
      <div class="img-wrapper slower">
        <a><img src={photo_0} alt="리현이 0개월때 사진" /> </a>
      </div>

      <div class="img-wrapper faster">
        <a>
          <img src={photo_1} alt="리현이 1개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower2">
        <a>
          <img src={photo_2} alt="리현이 2개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper ">
        <a>
          <img src={photo_3} alt="리현이 3개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower vertical">
        <a>
          <img src={photo_4} alt="리현이 4개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower slower-down">
        <a>
          <img src={photo_5} alt="리현이 5개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper">
        <a>
          <img src={photo_6} alt="리현이 6개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower">
        <a>
          <img src={photo_7} alt="리현이 7개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper faster1">
        <a>
          <img src={photo_8} alt="리현이 8개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper">
        <a>
          <img src={photo_9} alt="리현이 9개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower">
        <a>
          <img src={photo_10} alt="리현이 10개월때 사진" />
        </a>
      </div>

      <div class="img-wrapper slower last">
        <a>
          <img src={photo_11} alt="리현이 11개월때 사진" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .root {
    background: #efecdb;
    overflow: hidden;
    height: 100vh;
    padding-top: 10vh;
  }
  * {
    box-sizing: border-box;
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

  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  ::-webkit-scrollbar-button {
    width: 1px;
    height: 1px;
  }

  .horizontal-scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vh;
    transform: rotate(-90deg) translate3d(0, -80vh, 0);
    transform-origin: right top;
    overflow-y: auto;
    overflow-x: scroll;
    padding: 0;
    height: 100vw;
    perspective: 1px;
    transform-style: preserve-3d;
    padding-bottom: 10rem;
  }
  .img-wrapper {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    transform-origin: 50% 50%;
    transform: rotate(90deg) translateZ(0.1px) scale(0.9) translateX(0px)
      translateY(-3vh);
    transition: 1s;
  }

  .img-wrapper:hover {
    min-height: 65vh;
  }

  .slower {
    transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
      translateY(-10vh);
  }
  .slower2 {
    transform: rotate(90deg) translateZ(-0.3px) scale(1.3) translateX(0%)
      translateY(2vh);
  }
  .slower-down {
    transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(0%)
      translateY(16vh);
  }
  .faster {
    transform: rotate(90deg) translateZ(0.15px) scale(0.8) translateX(0%)
      translateY(14vh);
  }
  .faster1 {
    transform: rotate(90deg) translateZ(0.05px) scale(0.8) translateX(0%)
      translateY(10vh);
  }
  .vertical {
    transform: rotate(90deg) translateZ(-0.15px) scale(1.15) translateX(0%)
      translateY(0%);
  }
  .last {
    transform: rotate(90deg) translateZ(-0.2px) scale(1.1) translateX(25vh)
      translateY(-8vh);
  }
  a {
    color: inherit;
    font-weight: 500;
  }
  h1 {
    font-weight: 300;
    font-size: 1rem;
  }

  .img-wrapper a {
    overflow: hidden;
    display: block;
    padding: 1vh;
    background: #efecdb;
    box-shadow: 0 10px 50px #5f2f1182;
  }
  img {
    max-width: 45vh;
    max-height: 50vh;
    transition: 0.5s;
    vertical-align: top;
    filter: saturate(40%) sepia(30%) hue-rotate(5deg);
  }
  a:hover img {
    filter: none;
  }
</style>
