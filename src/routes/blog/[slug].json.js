import blogs from '../../../data/blog';

const slugLookup = new Map(blogs.map(blog => [blog.slug, JSON.stringify(blog)]));

export function get(req, res) {
	const { slug } = req.params;
	
	if (slugLookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
	
		res.end(slugLookup.get(slug));
		return;
	}

	res.writeHead(404, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({ message: '404 blog post not found' }));
}