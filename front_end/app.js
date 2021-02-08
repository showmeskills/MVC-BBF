const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const config = require('./config');
const log4js = require("log4js");
const koaBody = require('koa-body');
app.use(koaBody());
log4js.configure({
  appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
require('./middlewares').error(app, logger)
// 静态文件
app.use(serve(config.staticDir));
// 开启路由
require('./controllers')(app);
app.listen(config.port, (  ) => {
    console.log(' ====>>>>server running',config.port);
    
})