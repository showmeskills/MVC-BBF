const config = require('../config');
const axios = require('axios');
let result = {
    code: 0,
    message: '',
    data: []
};
class SafeRequest {
    constructor(url) {
        this.baseURL = config.baseURL;
        this.url = url;
    }

    fetch(options) {
        let bookFetch = axios.get(this.baseURL + this.url);

        if (options) {
            bookFetch = axios({
                url: this.baseURL + this.url,
                method: options.method,
                data: options.params,
            })
        }

        return new Promise((resolve, reject) => {
            bookFetch
                .then(value =>{
                    //console.log('safeRequest==>',value.data);
                    if(value.data){
                        result.data = value.data;
                        result.message = 'you have been required data successfully';
                    }else{
                        result.code = 1;
                        result.message = 'you have not been required data successfully';
                    }
                    resolve(result)
                })
                .catch(err =>{
                    //console.log('safeRequest==>',err)
                    result.code = 1;
                    result.message = 'BFF cannot connect the server side';
                    reject(err)
                })
        })
    }
}

module.exports = SafeRequest;