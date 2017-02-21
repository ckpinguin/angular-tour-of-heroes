const path = require('path');
const webpack = require('webpack');
//const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist'),
    //appDirectory: fs.realpathSync(process.cwd()) + '/dist/'
    publicPathDev: '/',
    //publicPathProd: 'https://ckpinguin.github.io/react-boilerplate/dist/'
    publicPathProd: './' // maybe '/dist/' ?
};

module.exports = {
    entry: {
        app: path.resolve(PATHS.src, 'main.ts')
    },
    output: {
        path: PATHS.dist,
        filename: 'static/js/bundle.js',
        publicPath: PATHS.publicPathProd
    },
};
