const path = require('path');
const mv = require('mv');

const root = path.resolve(__dirname, '..');
const currentSrcPath = path.resolve(root, 'src');

mv(currentSrcPath, root, err => {
	if (err) {
		console.log('PHUNCTIONAL - ERROR on postinstall: ', err);
	}
});
