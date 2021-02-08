const router = require('koa-simple-router');
//front_end controller
const IndexController = require('./indexController');
const indexController = new IndexController();

//API controller
const APIController = require('./APIController');
const aPIController = new APIController();

module.exports = (app) => {
    /*
    app.use(router(_ => {
        //indexcontroller go back hmtl page 后台跳转
        _.get('/', indexController.index())
        _.get('/index.html', indexController.index())
        _.get('/es',indexController.actionEs())
     
    }))
    */
    app.use(router({prefix: '/api'},_ => {     
       //back api from server_request
        _.get('/books',aPIController.actionAdmin())
        //添加图书
        _.post('/books/book',aPIController.actionAdd())
        //编辑图书 使用路由参数 :自定义
        _.get('/books/book/:id',aPIController.actionEditPage())
        //改变请求方法之后 前端需要把方法改为put
        _.put('/books/book', aPIController.actionEdit())
        //删除图书
        _.delete('/books/book/:id',aPIController.actionDelete())   
    }))
}
