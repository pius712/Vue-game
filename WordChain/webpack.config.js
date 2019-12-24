const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports ={
    entry:{
        app: path.join(__dirname, '/src/main.js')
    },
    resolve: {
        extensions:['.vue', 'js'],
    },
    module:{
        rules:[
            {test:/\.vue$/, use: 'vue-loader'
        }]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    output:{
        filename: 'app.js', 
        path: path.join(__dirname, 'dist'),
    }
}