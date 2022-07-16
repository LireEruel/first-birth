<script>
  import Baby from "./Baby.svelte";
  import Invitation from "./Invitation.svelte";
  import Message from "./Message.svelte";
  import Photo from "./Photo.svelte";
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
    <a
      use:scrollTo={{ ref: "photo", duration: 1500 }}
      href="#invitation"
      class="navi">Photo</a
    >
    <a
      use:scrollTo={{ ref: "message", duration: 1500 }}
      href="#invitation"
      class="navi">Message</a
    >
  </nav>
  <section class="section-baby" use:scrollRef={"baby"}>
    <Baby />
  </section>
  <section use:scrollRef={"invitation"} class="section-invitation">
    <Invitation />
  </section>
  <section use:scrollRef={"photo"}>
    <Photo />
  </section>
  <section use:scrollRef={"message"}>
    <Message />
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
  @font-face {
    font-family: noto_serif_kr;
    src: url(../assets/NotoSerifKR.otf);
  }
  .root {
    margin: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    font-family: "noto_serif_kr";
  }

  #top_view {
    background-image: url("../assets/top_image.jpg");
    width: 100%;
    height: 100vh;
    align-self: center;
    margin: 0;
    background-size: cover;
    top: 0;
    background-position: center;
    background-repeat: no-repeat;
  }
  .root:focus {
    outline: 0;
  }
  .title {
    color: white;
    font-family: amarillo;
    letter-spacing: 0.3rem;
    padding-top: 10%;
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
    z-index: 999;
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

  a {
    transform-style: preserve-3d;
    transition: 0.4s;
  }

  .section-invitation {
    padding: 5%;
  }
</style>
