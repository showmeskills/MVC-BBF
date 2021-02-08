const _ = require('lodash');
const path = require('path');
let config = {
    "staticDir":path.join(__dirname,'..','views'),
}

if(process.env.NODE_ENV == 'development'){
    let localPort = {
        //前端渲染路口
        port: 8080,
        //服务端获取地址路由
        baseURL: `http://localhost:8088`
    };
    _.assignIn(config, localPort)
}
if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port: 80
    };

    _.assignIn(config, prodPort)
}
module.exports = config;