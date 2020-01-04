const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry :{
        app: path.join(__dirname, '/src', '/main.js')
    },
    module:{
        rules : [{
            test: /\.vue$/,
            loader: ['vue-loader'] // npm i vue-loader -D   .vue 파일은 이제 vue-loader가 처리한다. 
        },{
            test: /\.css$/,
            loader: ['vue-style-loader', 'css-loader']
        }],
    
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    output:{
        filename : 'app.js',
        path : path.join(__dirname, '/dist'),
        publicPath: '/dist'
    }
}