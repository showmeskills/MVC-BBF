const data = require('../data.json');
const fs = require('fs');
const path = require('path');
class SafeRequest {
    constructor(){}
    getData(){
        return new Promise((resolve,reject) =>{
            resolve(data)
        })
    }
    addData(opt){
        let arr = [];
        data.forEach(item => arr.push(Number(item.id)))
        let max = Math.max.apply(null, arr);
        opt.id = ++max;
        data.push(opt);

        let result = {
            code:0,
            message:'',
            data:[]
        }

        return new Promise((resolve,reject) =>{
            fs.writeFile(path.join(__dirname,'..','data.json'),JSON.stringify(data),err =>{
                if(err){
                    result.code = 1;
                    result.message = 'add failed'
                    reject(result)
                }else{
                    result.message = 'add successfully'
                    resolve(result)
                }
            })
        })
    }
    getEditData(id){
        let obj = null;
        obj = data.find(item=>item.id == id);
        
        let result = {
            code:0,
            message:'',
            data:[]
        }
        return new Promise((resolve, reject)=>{
                if(obj){
                    result.message = 'get data successfully'
                    result.data = obj
                    resolve(result)
                }else{
                    reject.message = 'get data failed'
                    result.code = 1;
                    reject(result)
                }
        })
    }
    editData(opt){
        data.forEach(item=>{
            if(item.id == opt.id){
                for(let key in item){
                    //console.log(key)//键名
                    //把原数据给覆盖
                    item[key] = opt[key]
                }
            }  
        })
        let result = {
            code:0,
            message:'',
            data:[]
        }
        return new Promise((resolve, reject) =>{
            
            //data是数组;需要转换成string类型
            fs.writeFile(path.join(__dirname,'..','data.json'),JSON.stringify(data),err=>{
                if(err){
                    result.code = 1;
                    result.message = 'edit failed';
                    reject(result);
                }else{
                    result.message = 'edit successfully'
                    resolve(result);
                }
            })
        })
    }

    deleteData(id){
       data.splice(data.findIndex(item=>item.id === id),1)
        let result = {
            code:0,
            message:'',
            data:[]
            }
        return new Promise((resolve, reject) =>{
            
            //data是数组;需要转换成string类型
            fs.writeFile(path.join(__dirname,'..','data.json'),JSON.stringify(data),err=>{
                if(err){
                    result.code = 1;
                    result.message = 'delete failed';
                    reject(result);
                }else{
                    result.message = 'delete successfully'
                    resolve(result);
                }
            })
        })
    }
}

module.exports = SafeRequest