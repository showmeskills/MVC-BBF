const _ = require('lodash');
config = {
};
if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port: 8088
    };
    _.assignIn(config, localPort)
}
if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port: 88
    };
    _.assignIn(config, prodPort)
}
module.exports = config;