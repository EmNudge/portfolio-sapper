
<script>
  import { fly } from 'svelte/transition';

  export let title;
  export let subtitle = '';;
</script>

<style>
  .title {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
    font-size: 1.3em;
  }
	h1, h2 {
		margin: 0;
	}
	h2 {
		font-weight: 100;
		font-size: 1.3em;
	}
</style>

<div class="title">
  <h1 in:fly={{ y: 50, duration: 500 }}>{title}</h1>

  {#if subtitle}
    <h2 in:fly={{ delay: 50, y: 50, duration: 500 }}>{subtitle}</h2>
  {/if}
</div>