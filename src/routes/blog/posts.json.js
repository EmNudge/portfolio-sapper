import blogs from '../../../data/blog';

const blogsWithNoHtml = blogs.map(blogPost => ({ ...blogPost, html: 'N/A' }))
const content = JSON.stringify(blogsWithNoHtml);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(content);
}