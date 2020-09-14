<script context="module">
	export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
		const post = await res.json();
		return { post };
	}
</script>

<script>
	export let post;
	
	import PostBanner from '../../components/PostBanner.svelte';
</script>

<svelte:head>
	<title>{post.title}</title>
	<link rel="stylesheet" href="blog.css">
</svelte:head>

<PostBanner {post} large={true} />

<article>
	{@html post.html}
</article>