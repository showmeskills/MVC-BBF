const router = require('koa-simple-router');
const Method = require('./routerMethod.js');
const method = new Method;

module.exports = (app) =>{
    app.use(router(_=>{
        //home page
        _.get('/',method.homePage());
        //admin in library
        _.get('/admin',method.adminPage());
        //add the content of new books 
        _.get('/addBooks',method.addBooks());
        //add books
        _.post('/add',method.actionAdd())
        //editpage
        _.get('/editpage',method.actionEditPage());
        //editAction
        _.post('/edit',method.actionEdit());
        //delete
        _.get('/delete',method.actionDelete())
    }))
}
