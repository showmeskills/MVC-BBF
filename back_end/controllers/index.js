const router = require('koa-simple-router')
const IndexController = require('./indexController');
const indexController = new IndexController();
module.exports = (app) => {
    app.use(router(_ => {
        //get data 
        _.get('/books', indexController.actionAdmin())
        // add data
        _.post('/books/book', indexController.actionAdd())
        // edit data
        _.get('/books/book/:id', indexController.actionEditPage())
        _.put('/books/book', indexController.actionEdit())
        // delete data
        _.delete('/books/book/:id', indexController.actionDelete())
    }))
}