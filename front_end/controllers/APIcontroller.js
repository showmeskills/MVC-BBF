let IndexBookModel = require('../models');
let indexBookModel = new IndexBookModel();

class APIController {
    constructor() { }

    // 获取图书
    actionAdmin(){
        return async function (ctx) {
            try{
                let msg = await indexBookModel.getData();
                if(msg.code === 0){
                    ctx.body = msg;
                }else{
                    ctx.body = 'you cannot get any data from BBF'
                }
            }catch(err){
                console.log(err);
            }
        }
    }
    // 添加图书
    actionAdd(){
        return async function(ctx){
            
            try{
                let msg = await indexBookModel.addData(ctx.request.body);

                if(msg.code == 0){
                    ctx.body = msg
                }else{
                    ctx.body = '添加失败！'
                }

            }catch(err){
                console.log('err ====>>>>', err);
                
            }
            
        }
    }
    // 编辑图书页
    actionEditPage(){
        return async function (ctx) {  
            let id = ctx.params.id;
            console.log('id ====>>>>', id);            
            try{
                let msg = await indexBookModel.getEditData(id)
                console.log('msg ====>>>>', msg);
                ctx.body = msg      
            }catch(err){
                console.log('err ====>>>>', err);            
            }     
        }
    }
    // 完成修改图书
    actionEdit(){
        return async function (ctx) {            
            try{
                let msg = await indexBookModel.editData(ctx.request.body)   
                console.log('actionEditMsg ====>>>>', msg);    
                ctx.body = msg;
            }catch(err){
                console.log('err ====>>>>', err);
            }
            
            
        }
    }
    // 删除图书
    actionDelete(){
        return async function (ctx) {
            // let id = ctx.request.query.deleteid;
            let id = ctx.params.id;
            // console.log('id ====>>>>', id);

            try{
                let msg = await indexBookModel.deleteData(id);
                console.log('msg ====>>>>', msg);
                
                ctx.body = msg;
                // ctx.redirect('/admin')
            }catch(err){
                console.log('err ====>>>>', err);
                
            }
            
            
        }
    }
}

module.exports = APIController