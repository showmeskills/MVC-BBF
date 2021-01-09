const path = require('path');
const _ = require('lodash');
let config = {
    'staticDir':path.join(__dirname,'..','assets'),
    'templageDir':path.join(__dirname,'..','views')
}

if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port:8000
    }
    _.assignIn(config,localPort)
}

if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port:80
    }
    _assignIn(config,prodPort)
}

module.exports = config;