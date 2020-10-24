<script>
  export let segment;
</script>

<style>
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 20px 40px;
    max-width: 1000px;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: flex-end;
  }
  nav a {
    padding: 5px;
    text-decoration: none;
    font-size: 1.2em;
    color: white;
    transition: .15s;
    margin: 0 15px;
  }
  nav a:hover {
    color: var(--theme-color);
  }
  nav a[aria-current] {
    color: var(--theme-color);
    font-weight: 500;
  }

  img {
    width: 70px;
    height: 70px;
  }
</style>

<header>
  <a href="/">
    <img src="svg/logo.svg" alt="logo">
  </a>
  <nav>
    <a 
      href="/" 
      aria-current="{!segment ? "page" : undefined}">
      About</a>
    <a 
      href="blog" 
      aria-current="{segment === "blog" ? "page" : undefined}">
      Blog</a>
    <a 
      href="reads" 
      aria-current="{segment === "reads" ? "page" : undefined}">
      Reads</a>
  </nav>
</header>