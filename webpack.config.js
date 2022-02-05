const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin'); //prod mode uses it automatically
const path = require('path');


let mode = 'development';
if (process.env.NODE_ENV === 'production') { //we set the mode to development when we run npm run build: "build": "cross-env NODE-ENV=production webpack"
    mode = 'production' //else set mode to production
}


module.exports = {
    //production/development mode
    mode: mode,



    //which file to process
    entry: './src/index.js',



    //where build should go
    output: {
        filename: 'bundle.[contenthash].js', //call build something different on each new build 
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },



    //what assets to process
    module: {
        rules: [
            { //css and scss
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""},
                    },
                    "css-loader",
                    "postcss-loader", //you can actually remove this this project doesn't use it. Also remove postcss.config.js and uninstall postcss, postcss-preset-env and postcss-loader
                    "sass-loader"
                ]
            },

            //ttf
            {
                test: /\.(ttf)$/,
                type: 'asset/resource'
            },

            //run all .js and jsx files thru babel
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'] //enable JS Classes (needs plugin as it's non-ECMA standard)
                    }
                }
            },

            //images
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [ //extract and minify all .css and .scss
        new CleanWebpackPlugin(), //place this on top of plugins => clears old builds
        //new TerserPlugin(), //minifies bundle.js - is activated automatically in production mode
        new MiniCssExtractPlugin({ //minify all css and scss and extract it into a separate file (not part of bundle)
            filename: 'styles.[contenthash].css' //call css something else on each new build
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', //tell wp what you want the index.html it generates to look like
            favicon: './src/images/favicon.png' //dont add favicon in <link rel='icon'... /> in ./src/index.html. No chance to make it work in Webpack. Put it here.
        })
    ],



    resolve: { //only do it if you call your react files .jsx   if you only use .js you are ok. It tells wp to import jsx files and js files even if we import them without extension: `import App from './App'`    (not: `from './App.js'`)
        extensions: [".js", ".jsx"]
    },



    devtool: "source-map", //show readable source-map
    


    //dev server settings
    devServer: { // setting for npm start => "start": "webpack serve"
        static: './dist', //set './dist' as static file ( that means a file where assets are)
        hot: true, //activate hot reloading
        port: 3000,
        open: true,
        historyApiFallback: true //react-router-dom won't work without this
    }
}
