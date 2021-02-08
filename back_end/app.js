const Koa = require('koa');
const app = new Koa;
const config = require('./config');
const log4js = require('log4js');
const koaBody = require('koa-body');
app.use(koaBody());
log4js.configure({
  appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
//dispose errors
require('./middlewares').error(app, logger)

//router
require('./controllers')(app)

app.listen(config.port, (  ) => {
    console.log(' ====>>>>server side running',config.port);
})