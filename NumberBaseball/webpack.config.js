//  웹팩에 대한 설정 ? 
// 웹팩 처리를 할 때 이 객체를 사용한다, 여기에 웹팩 설정을 해주면 된다. 
// 설정은 크게 entry, module, plugins, output이 있다. (core concept)
// node 환경에서는 변수 = require()
// 프론트엔드 환경에서는 import ... from ...
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); 
module.exports = {
    mode: 'development',
    devtool: 'eva',
    resolve: {
        extensions: ['.js','.vue'],
    },
    entry:{
        app: path.join(__dirname,'/main.js') // 하나로 합쳐질 파일 이름.
    },
    module:{  // 웹팩의 핵심적인 부분.. ?!  entry 파일부터 읽는데 entry 파일의 vue 파일은 실질적으로 js파일이 아니다. 
        // 웹팩은 js만..! 
        rules : [{
            test: /\.vue$/,
            loader: 'vue-loader' // npm i vue-loader -D   .vue 파일은 이제 vue-loader가 처리한다. 
        }],
    },
    plugins:[
        new VueLoaderPlugin()
    ],  
    output:{
        filename: 'app.js', 
        path: path.join(__dirname,'dist'),
    }// 이렇게 하면 ..
}; 