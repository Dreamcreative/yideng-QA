const Koa = require("koa");
const app = new Koa();
app.use(async (ctx)=>{
    ctx.body={
        data:"京程一灯"
    }
})


app.listen(3000);
module.exports = app;