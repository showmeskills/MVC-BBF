const SafeRequest = require("../models/data")
const safeRequest = new SafeRequest

class Method {
    constructor(){}
    homePage(){
        let data = 'This is Library HomePage'
        return async(ctx)=>{
            await ctx.render('index',{
                data
            })
        }
    }
    adminPage(){
        return async(ctx)=>{
            let msg = await safeRequest.getData()
            await ctx.render('admin',{
                data:msg
            })
        }
    }
    addBooks(){
        return async(ctx)=>{
            await ctx.render('addBooks')
        }
    }
    actionAdd(){
        return async(ctx)=>{
           try{
                await safeRequest.addData(ctx.request.body)
                ctx.render('actionAdd',{data:'you have added a new book,please click back admin page'})
           }catch(err){
               console.log(err)
           }
        }
    }
    actionEditPage(){
        return async(ctx)=>{
            let id = ctx.request.query.editid;
            try{
               let msg = await safeRequest.getEditData(id)
                //console.log(msg)
                ctx.render('editpage',{
                    data:msg.data
                })
            }catch(err){
                console.log(err)
            }
        }
    }
    actionEdit(){
        return async(ctx)=>{
            try{
                await safeRequest.editData(ctx.request.body)
                ctx.render('actionEdit',{
                    data:'you have edited successfully'
                })
            }catch(err){
                console.log(err)
            }
        }
    }
    actionDelete(){
        return async(ctx)=>{
            let id = ctx.request.query.editid;
            try{
                await safeRequest.deleteData(id)
                ctx.redirect('admin')
            }catch(err){
                console.log(err)
            }
        }
    }
}
module.exports = Method