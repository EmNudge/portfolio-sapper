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
Everything is genarated statically, but links within sapper try to be even faster. This leads to some weird areas, like icons not updated for different hashes on the `/reads` page when choosing specific tags.

Another difficulty I've had is with page loads. I should have decreased the bundle size by a decent amount, yet clicking links seem to be even slower than going to them directly. I am really not sure why. The pages seem to work without JS though, which is cool.
