<script>
  export let path;
  export let name;
  export let link;
</script>

<style>
  .tech {
    display: grid;
    justify-items: center;
    color: white;
    text-decoration: none;
    position: relative;
    height: 70px;
    width: 70px;
  }
  
  img {
    height: 50px;
    width: 50px;
    transition: .25s;
  }
  .tech:hover img {
    transform: scale(1.1);
  }
  p {
    position: absolute;
    margin: 0;
    bottom: -15px;
    opacity: 0;
    transition: .25s;
    width: 90px;
    text-align: center;
  }
  .tech:hover p {
    opacity: 1;
  }
</style>

<a href={link} class="tech">
  <img src={path} alt={name}>
  <p>{name}</p>
</a>
