const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode : 'development',
    entry : {
        app: './src/main.js',
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: ['vue-loader']
        },{
            test: /\.css$/,
            loader: ['vue-style-loader', 'css-loader']
        }]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    output :{
        filename : 'app.js',
        path : path.join(__dirname, "dist"),
        publicPath: '/dist'
    }
}