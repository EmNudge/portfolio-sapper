<script>
  export let jumbotron = false;
  export let override = false;
</script>

<style>
  section {
		max-width: 800px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 30px;
		margin: 60px 0;
	}
	section :global(svg) {
		height: 100%;
  }
  
  @media screen and (max-width: 600px) {
    section {
      grid-template-columns: 1fr;
    }
    section :global(svg) {
      width: 100%;
      height: 250px;
    }
  }

  .jumbotron {
		width: 100vw;
    margin: 0 calc(50% - 50vw);
    background: linear-gradient(to top right, #262d3a, #2a3243);
    display: flex;
    justify-content: center;
    padding: 25px;
    box-sizing: border-box;
  }	
  .override {
		display: block;
  }
  
</style>

{#if jumbotron}
  <div class="jumbotron">
    <section class:override>
      <slot />
    </section>
  </div>
{:else}
  <section class:override>
    <slot />
  </section>
{/if}