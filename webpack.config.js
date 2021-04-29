const path = require('path');
const config = require('./webpack.common');

config.entry = './src/index.js',
config.output = {
	path: path.join(__dirname, "dist"),
	filename: 'paella-zoom-plugin.js',
	library: 'paella-zoom-plugin',
	libraryTarget: 'umd'
};

module.exports = config;