# Sapper Portfolio
Rendition of my previous portfolio, but this time with Sapper!

The dev experience with sapper over next.js is a massive improvement. The dev experience was really smooth.

## Tech Explanation
I think a better understanding of Svelte and my bad experiences with both [Gatsby](https://www.gatsbyjs.com/) and [Next.js](https://nextjs.org/) helped with my experience here. That *and* I find Sapper to have a *much* smoother develpoment experience.

### Routes
The general idea is that we're building a lot of assets server-side. We might generate some right as the server starts and others a bit later on. Because we're outputing a static site, there isn't much of a difference.

On pages that we import changeable data, we have an accompanying `pageName.json.js` file. Here we can take advantage of Express and Node.js since this is server-side. Those files themselves other files which do some of the hard work. In the case of the reads, it is in `/data/reads/index.js`. For the blog posts, it is `/data/blog/index.js`. 

The `*.json.js` files are called in our regular routes in the `preload` function. These get called before page render, so there's no actual JS needed on page-load (at least in regards to that specifically).

### Parsing
While we can use Node.js directly to read and then parse the provided files, it is simpler to use Rollup plugins and then just parse the result. We use a `glob` Rollup plugin which allows us to import multiple files with a single import. The available rollup plugins are a bit frustrating to work with.. Luckily, it isn't very difficult to create our own once given some way to parse the files. These are located in `/src/utils/` (`markdown.js` and `toml.js` respectively) and imported in `rollup.config.js`. I should probably choose a better folder name.

### Difficulties
Page loads. I should have decreased the bundle size by a decent amount, yet clicking links seem to be even slower than going to them directly. I am really not sure why. The pages seem to work without JS though, which is cool.

## ToDo
The site was a rewrite of the previous, so I mostly consider it finished. Other than fixing up the problem mentioned in `Difficulties`, I probably want to move the `reads` data out of `data/reads`. At the moment, it's a bit hard to manage. The filesystem is convinient and it allows me to trigger a Netlify redeploy using github, but it forces me to make a new commit every time I want an update. I'm not sure how I feel about using commits this way, since it also mixes up in my actual code updates. I'd also like my site's code to not be entirely tied to its contents. That's basically impossible when it comes to the HTML, but it's doable for these blogs.

There's also the difficulty of organizing them and making edits afterward. The files are not ordered in my filesystem by their `"readAt"` date, just the date I made them. I'm planning on using the Notion API for this, but I'll have to wait until that becomes available. I could theoretically also use Notion then for the blogs, but I'd rather those be tied to the github. Notion would also restrict me in how to write the markdown, severely limiting how I can output it.
