const Koa = require('koa');
const app = new Koa;
const config = require('./config/config')
const serve = require('koa-static');
const koaBody = require('koa-body');
app.use(koaBody())
app.use(serve(config.staticDir))
const render = require('koa-art-template');
render(app,{
    root:config.templageDir,
    extname:'.html'
})
require('./controllers/router')(app);
const log4js = require('log4js')
log4js.configure({
    appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
})
const logger = log4js.getLogger('cheese')
require('./middlewares/middleware').error(app,logger)

app.listen(config.port,()=>{console.log('Serve is listening')})