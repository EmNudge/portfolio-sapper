<script context="module">
	export async function preload({ params, query }) {
		const res1 = await this.fetch('blog/posts.json');
		let posts = await res1.json();

		const res2 = await this.fetch('blog/tags.json');
		const tags = await res2.json();

		if (query.tag && tags.includes(query.tag)) {
			posts = posts.filter(post => post.tags.includes(query.tag));
		}

		return { posts, tags };
	}
</script>

<script>
	export let posts;
	export let tags;

	import Title from '../../components/Title.svelte';
	import PostBanner from '../../components/PostBanner.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<style>
	.tags {
		display: flex;
		justify-content: center;
		grid-gap: 10px;
		padding: 20px;
	}

	.posts {
		display: grid;
		grid-gap: 10px;
	}
	@media screen and (max-width: 450px) {
		.posts {
			grid-gap: 30px;
		}
		.post {
			border-bottom: 1px solid #fff2;
		}
		.post:last-child {
			border-bottom: none;
		}
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Title title="Blog" />

<div class="tags">
	<a href="blog">#all</a>
	{#each tags as tag, i}
		<a href="blog/?tag={tag}" in:fade={{ delay: i * 50 }}>#{tag}</a>
	{/each}
</div>

<div class="posts">
	{#each posts as post, i}
		<div class="post" in:fly={{ delay: i * 50, y: 0, x: 50, duration: 250 }}>
			<PostBanner {post} />
		</div>
	{/each}
</div>