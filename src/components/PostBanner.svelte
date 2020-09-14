<script>
	export let post;

  const icon = post.icon || 'book';
  export let large = false;
</script>

<style>
  .post-header {
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    grid-gap: 25px;
  }

  .large {
		margin: 40px 0;
		grid-template-columns: 100px 1fr;
	}
  .large h2 {
    font-size: 2.5em;
    margin-bottom: 5px;
    margin-top: -5px;
  }
  .large h2 a {
    text-decoration: none;
  } 
  .large img {
    width: 100%;
    height: 80px;
  }

  .post-header {
		color: white;
		text-decoration: none;
		padding: 20px;
		transition: .1s;
  }
  
	@media screen and (max-width: 450px) {
    .post-header {
      padding: 0;
			padding-bottom: 20px;
    }
    .small {
      grid-template-columns: 1fr;
    }
    .small .image-container {
      display: none;
    }
	}

  .image-container {
		display: flex;
		justify-content: center;
	}
	img {
		height: 60px;
  }
  
	h2 a {
		color: var(--theme-color);
    padding: 0;
	}
	h2 a:hover {
		background: none;
	}

	h3 {
		font-size: .8em;
		color: #fffa;

		display: flex;
		flex-wrap: wrap;
		align-items: center;
		grid-gap: 1px;
	}
	h3 a.post-tag {
		display: inline-block;
		padding: 3px;
		border-radius: 4px;
	}
	p {
		color: #fffe;
		margin: 0;
	}
</style>


<div class="post-header" class:large class:small={!large}>
  <div class="image-container">
    <img src="svg/{icon}.svg" alt="icon">
  </div>
  <div class="text">
    <h3>
      <span>{post.date} • {post.minutes} minute read •</span>
      {#each post.tags as tag}
        <a href="blog/?tag={tag}" class="post-tag">#{tag}</a>
      {/each}
    </h3>
    <h2><a href="blog/{post.slug}">{post.title}</a></h2>
    <p>{post.summary}</p>
  </div>
</div>