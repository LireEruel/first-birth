<script>
  let name = "";
  let content = "";
  let comments = [
    { name: "서희", content: "리현이 귀여워어!!" },
    { name: "선호", content: "리현이 ㄱㅇㅇ" },
  ];

  const addComment = () => {
    comments = comments.concat({ name, content });
    name = "";
    content = "";
  };
</script>

<div class="root">
  <div class="title-wrap">
    <h1 class="title">Message</h1>
    <hr />
  </div>
  <div class="input-wrap">
    <input bind:value={name} placeholder="enter your name" />
    <input
      class="input-content"
      bind:value={content}
      placeholder="enter your name"
    />
    <button on:click={addComment}>등록!</button>
  </div>
  <ul>
    {#each comments as comment, i}
      <li>{comment.name} : {comment.content}</li>
    {/each}
  </ul>
</div>

<style>
  .root {
    padding-top: 10vh;
    padding-bottom: 10vh;
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
  .input-wrap {
    margin-top: 5vh;
  }
  .input-content {
    width: 30%;
  }
  li {
    list-style: none;
  }
</style>
