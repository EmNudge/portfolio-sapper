<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('reads.json');
		const reads = await res.json();
		return { reads };
	}
</script>

<script>
	import Title from '../components/Title.svelte';
  import { fly } from 'svelte/transition';

	export let reads;
</script>

<style>
	.reads {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
		padding: 20px;
	}
	a {
		text-decoration: none;
		font-size: .9em;
		padding: 20px;
		transition: .1s;
		color: white;

		display: grid;
		grid-gap: 5px;
	}
	a:hover {
		background: #fff1;
	}
	@media screen and (max-width: 450px) {
		.reads {
			padding: 0;
			grid-gap: 40px;
		}
		a {
			padding: 0;
		}
	}

	h2 {
		margin-bottom: 10px;
		color: var(--theme-color);
	}
	p {
		margin: 0;
		font-size: 1.2em;
		color: #fffd;
	}
	.meta {
		color: #fffa;
	}
</style>

<svelte:head>
	<title>Recent Reads</title>
</svelte:head>

<Title title="Recent Reads" />

<div class="reads">
	{#each reads as { author, title, url, description, readAt, createdAt }, i}
		<a href={url} in:fly={{ delay: i * 50, x: 50, y: 0, duration: 250 }}>
			<div class="meta">{author} • created on {createdAt} • read on {readAt}</div>
			<h2>{title}</h2>
			<p>{description}</p>
		</a>
	{/each}
</div>