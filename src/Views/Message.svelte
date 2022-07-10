<script>
  let name = "";
  let content = "";
  let comments = [
    { name: "서희", content: "리현이 귀여워어!!" },
    { name: "선호", content: "리현이 ㄱㅇㅇ" },
  ];
  let valid = false;

  const addComment = () => {
    if (!valid) {
      alert("3글자 이상 입력해주세요");
    }
    if (name.length < 1) {
      name = "익명";
    }
    comments = comments.concat({ name, content });
    name = "";
    content = "";
    valid = false;
  };

  const validCheck = () => {
    if (content.length < 3) {
      valid = false;
    } else {
      valid = true;
    }
  };
</script>

<div class="root">
  <div class="title-wrap">
    <h1 class="title">Message</h1>
    <hr />
    <p class="sub-title">
      드디어 사계절을 모두 경험한 리현이에게 축하의 메시지를 남겨주세요! :)
    </p>
    <p class="sub-title">작성자를 적지 않으면 익명으로 기록됩니다.</p>
  </div>
  <div class="input-area">
    <div class="input-wrap">
      <label for="name-input">작성자</label>
      <input id="name-input" bind:value={name} placeholder="ex)고모할머니" />
    </div>
    <div class="input-wrap">
      <label for="content-input">내용</label>
      <textarea
        id="content-input"
        class="content-input"
        bind:value={content}
        placeholder="리현이의 돌을 축하해주세요! ex) 리현아 오래오래 건강하렴~"
        type="text"
        on:input={validCheck}
      />
      <button
        id="submit-btn"
        class={valid ? "valid-btn" : "unvalid-btn"}
        on:click={addComment}>등록!</button
      >
    </div>
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
  .input-area {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50vh;
    margin-top: 1vh;
  }
  #name-input {
    padding: 1vh;
    margin-top: 1vh;
    border-radius: 1vh;
    border-color: gray;
    border-width: 1px;
  }
  .content-input {
    padding: 1vh;
    width: 100%;
    max-width: 50vw;
    margin-top: 1vh;
    min-height: 5vh;
    border-radius: 1vh;
    border-color: gray;
    resize: none;
  }
  #submit-btn {
    margin-top: 1vh;
    border: transparent;
    padding: 1vh 2vh;
    border-radius: 1vh;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  .valid-btn {
    background-color: #e8c599;
  }

  li {
    list-style: none;
  }
</style>
