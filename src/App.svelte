<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import Intro from "./Views/Intro.svelte";
  import Home from "./Views/Home.svelte";
</script>

<Router>
  <main>
    <Route path="/">
      <Intro />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
  </main>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
  }
  :global(body) {
    margin: 0;
  }
</style>
