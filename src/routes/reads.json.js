import files from '../../data/reads';

const contents = JSON.stringify(files);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}