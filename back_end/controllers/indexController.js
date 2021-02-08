let SafeRequest = require('../models');
let safeRequest = new SafeRequest();

class IndexController {
    constructor() { }
    //the method of getting data
    actionAdmin() {
        return async function (ctx) {
            let msg = await safeRequest.getData();
            ctx.body = msg;
        }
    };
    // add data
    actionAdd() {
        return async function (ctx) {
            console.log('ctx.request.body ====>>>>', ctx.request.body);
            try {
                let msg = await safeRequest.addData(ctx.request.body);
                console.log('msg ====>>>>', msg);
                if (msg.code == 0) {
                    ctx.body = msg
                } else {
                    ctx.body = '添加失败！'
                }

            } catch (err) {
                console.log('err ====>>>>', err);
            }
        }
    };
    // ready edit books
    actionEditPage() {
        return async function (ctx) {
            let id = ctx.params.id;
            console.log('id ====>>>>', id);
            try {
                let msg = await safeRequest.getEditData(id)
                console.log('msg ====>>>>', msg);
                ctx.body = msg
            } catch (err) {
                console.log('err ====>>>>', err);

            }


        }
    };
    // edit books
    actionEdit() {
        return async function (ctx) {
            try {
                let msg = await safeRequest.editData(ctx.request.body)
                ctx.body = msg;
            } catch (err) {
                console.log('err ====>>>>', err);

            }


        }
    };
    // delete books
    actionDelete() {
        return async function (ctx) {
            let id = ctx.params.id;
            try {
                let msg = await safeRequest.deleteData(id);
                console.log('msg ====>>>>', msg);
                ctx.body = msg;
            } catch (err) {
                console.log('err ====>>>>', err);
            }
        }
    };
}

module.exports = IndexController;