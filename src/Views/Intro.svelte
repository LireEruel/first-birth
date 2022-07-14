<!-- Optional: some overlay text to describe the video -->
<script>
  import intro from "../assets/intro.mp4";
  import { Link } from "svelte-navigator";
</script>

<video autoplay muted loop id="myVideo">
  <source src={intro} type="video/mp4" />
</video>

<div class="root">
  <div class="content">
    <h1>First birth</h1>

    <div class="button__horizontal">
      <Link to="home">
        <button class="button">Hello </button>
      </Link>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: fortune;
    src: url(../assets/fortune.ttf);
  }
  @media screen and (max-width: 500px) {
    #myVideo {
      display: none;
    }
    .root {
      position: fixed;
      left: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      background-image: url("../assets/intro_mobile.jpg");
      background-size: 110%;
    }
  }
  @media screen and (min-width: 501px) {
    #myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
    }
  }

  .content {
    position: fixed;
    color: #f1f1f1;
    width: 100%;
    top: 50%;
    font-family: fortune;
    font-size: 3rem;
    letter-spacing: 5px;
  }
  .button {
    --border-size: 2px;
    padding: 1.5em 3em;
    appearance: none;
    border: 0;
    background: transparent;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0;
    box-shadow: inset 0 0 0 var(--border-size) currentcolor;
    transition: all 0.5s ease-out;
  }
  h1:focus {
    outline: 0;
  }

  .button:hover {
    background-color: white;
    border-color: black;
    color: black;
  }
</style>
