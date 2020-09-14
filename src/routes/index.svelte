<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch('technologies.json');
		const technologies = await res.json();
		return { technologies };
	}
</script>

<script>
	import Title from '../components/Title.svelte';
	import Tech from '../components/Tech.svelte';
	
	// SVGs
	import Console from '../components/pictures/Console.svelte';
	import Waveform from '../components/pictures/Waveform.svelte';
	import Paper from '../components/pictures/Paper.svelte';

	import PageSection from '../components/PageSection.svelte';

	export let technologies;
</script>

<style>
	p {
		letter-spacing: .5px;
		font-size: 1.3em;
		font-weight: 300;
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 10px;
		padding-bottom: 30px;
	}
	@media screen and (max-width: 500px) {
		.tech {
			justify-content: center;
    	grid-gap: 15px;
		}
		.tech-header {
			text-align: center;
			margin-bottom: 25px;
		}
	}

	.dev-paper {
		display: flex;
		justify-content: center;
	}
	.dev-paper :global(svg) {
		transition: .25s;
		transform: scale(.9);
	}
	.dev-paper:hover :global(svg)  {
		transform: scale(1);
	}
	
	.projects-icon {
		display: grid;
		grid-template-rows: auto 1fr;
    grid-gap: 30px;
	}
	.projects-icon a img {
		transition: .25s;
	}
	.projects-icon a:hover img {
		transform: scale(1.1);
	}

	.projects-icon .main {
		display: flex;
    justify-content: center;
	}
	.projects-icon .lessers {
		width: 250px;
    display: flex;
    justify-content: space-between;
		align-items: flex-end;
    padding-left: 40px;
	}
	.projects-icon .github { padding-right: 80px; }
	.projects-icon .github img { height: 140px;	}
	.projects-icon .codepen img { height: 80px; }
	.projects-icon .codesandbox {	padding-bottom: 40px; }
	.projects-icon .codesandbox img {	height: 120px; }
</style>

<svelte:head>
	<title>Calvin Kipperman</title>
</svelte:head>

<Title title="Calvin Kipperman" subtitle="Web Developer" />

<PageSection>
	<Console />
	<div class="text">
		<p>Hey there! I’m a fullstack web developer with a strong UI background.</p>
		<p>I develop complex and beautiful web and native applications with a variety of web frameworks and technlogies.</p>
		<p>I also write articles. Check them out <a href="https://dev.to/emnudge">here!</a></p>
	</div>
</PageSection>

<PageSection jumbotron={true}>
	<div class="text">
		<h1>Voice Acting</h1>
		<p>Aside from developing, I do voice work for videogames, animations, and commercials. No, seriously, I have an <a href="https://www.imdb.com/name/nm10664016/">IMDb page</a>.</p>
		<p>If you want to read more about that, you can head over to my voice work website, <a href="https://emnudge.com">https://emnudge.com</a>.</p>
	</div>
	<Waveform />
</PageSection>

<PageSection override={true}>
	<h1>Technologies</h1>
	<br>
	
	{#each technologies as [name, tech]}
		<h2 class="tech-header">{name}</h2>
		<div class="tech">
			{#each tech as data}
				<Tech {...data} />
			{/each}
		</div>
	{/each}
</PageSection>


<PageSection jumbotron={true}>
	<div class="text">
		<h1>Articles</h1>
		<p>While I will ocassionally post articles to my website over <a href="/blog">here</a>, they are usually rather general in scope or taken from one of my better posts elsewhere.</p>
		<p>For more coding-specific articles, I tend to post to <a href="https://dev.to/emnudge">dev.to</a> as they often get a lot more attention, which is something I prefer when trying to teach coding.</p>
	</div>
	<a href="https://dev.to/emnudge" class="dev-paper">
		<Paper />
	</a>
</PageSection>

<PageSection>
	<div class="projects-icon">
		<div class="main">
			<a href="https://github.com/EmNudge" class="github">
				<img src="svg/brand/github.svg" alt="github">
			</a>
		</div>
		<div class="lessers">
			<a href="https://codepen.io/EmNudge/" class="codepen">
				<img src="svg/brand/codepen.svg" alt="codepen">
			</a>
			<a href="https://codesandbox.io/u/EmNudge/" class="codesandbox">
				<img src="svg/brand/codesandbox.svg" alt="codesandbox">
			</a>
		</div>
	</div>

	<div class="text">
		<h1>Projects</h1>
		<p>I am constantly coding. Whether it’s for long term projects, small examples, or purely practice. Larger or practical work will be on my <a href="https://github.com/emnudge">Github</a>, but I will have a ton of examples and experiments on my <a href="https://codepen.io/EmNudge/">codepen</a> and <a href="https://codesandbox.io/u/EmNudge/">codesandbox</a>.</p>
		<p>I will also have some more noteable ones listed on my projects page!</p>
	</div>
</PageSection>