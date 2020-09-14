import blogs from '../../../data/blog';

const content = JSON.stringify(blogs);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(content);
}