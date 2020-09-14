import blogs from '../../../data/blog';

const tags = new Set();
for (const blog of blogs) {
  for (const tag of blog.tags) {
    tags.add(tag);
  }
}
// turn back into an array, so JSON.stringify actually works
const content = JSON.stringify(Array.from(tags));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(content);
}