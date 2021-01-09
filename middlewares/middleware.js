const middleware = {
    error(app,logger){
        app.use(async (ctx, next) =>{
            await next();
            if(ctx.status !== 404) return
            ctx.status = 200;
            ctx.body = `there is not page`
        });

        app.use(async (ctx, next) =>{
            try{
                await next();
            }catch(err){
                ctx.status = 500;
                ctx.body = 'the webpage does not connect, please contact with coder'
                logger.error(err);
            }
        })
    }
}
module.exports = middleware