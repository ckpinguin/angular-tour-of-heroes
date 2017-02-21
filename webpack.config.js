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
        filename: 'static/js/[name].js', // one bundle per `entry` item
        publicPath: PATHS.publicPathProd
    },
};
