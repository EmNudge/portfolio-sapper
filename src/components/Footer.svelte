<style>
  footer {
    border-top: 1px solid #ffffff38;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    opacity: .8;
  }
  @media screen and (max-width: 450px) {
    footer {
      flex-direction: column;
      align-items: center;
    }
  }
  
  img {
    opacity: .8;
    height: 20px;
    padding: 8px;
  }
</style>

<footer>
  <div class="links">
    <a href="mailto:contact@kipperman.co">
      <img src="svg/mail.svg" alt="contact" />
    </a>
    <a href="https://github.com/EmNudge">
      <img src="svg/brand/github.svg" alt="GitHub" />
    </a>
    <a href="https://codesandbox.io/u/EmNudge/">
      <img src="svg/brand/codesandbox.svg" alt="CodeSandbox" />
    </a>
    <a href="https://codepen.io/EmNudge/">
      <img src="svg/brand/codepen.svg" alt="Codepen" />
    </a>
    <a href="https://dev.to/emnudge">
      <img src="svg/brand/dev.svg" alt="Dev.to" />
    </a>
  </div>
  <div class="copyright">© Copyright 2019 - {new Date().getFullYear()} Calvin Kipperman</div>
</footer>
