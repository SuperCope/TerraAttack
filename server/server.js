import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { Villages } from '../controllers/villagesController.js'
import { Raids } from '../controllers/raidsController.js'
import { Items } from '../controllers/itemsController.js'

var router = new Router()
var villagesController = new Villages(router);
var raidsController = new Raids(villagesController.getRouter());
var itemsController = new Items(raidsController.getRouter());

router = raidsController.getRouter()

const app = new Application();
const port = 3000;

app.use(async (ctx, next) => {
    await next();
})


// app.use((ctx) => {
//     ctx.response.body = "Hello World ! "
// })

app.use(router.routes()).use(router.allowedMethods());

app.listen({ port })
console.log("*********SERVEUR LISTENING***********")
