<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		padding: 15px;
		max-width: 800px;
		margin: 0 auto;
	}
</style>

<Header {segment} />
<main>
	<slot></slot>
</main>
<Footer />