import technologies from '../../data/technologies';

const arr = [
	['Frontend Frameworks', technologies.frontend],
	['Languages', technologies.langs],
	['Database Tech', technologies.database]
];
const contents = JSON.stringify(arr);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}