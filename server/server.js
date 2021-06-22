import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { Villages } from '../controllers/villagesController.js'
import { Raids } from '../controllers/raidsController.js'
import { Items } from '../controllers/itemsController.js'
import { Fermes } from '../controllers/fermesController.js'
import { Forets } from '../controllers/foretsController.js'


var router = new Router()

var villagesController = new Villages(router);
var raidsController = new Raids(villagesController.getRouter());
var itemsController = new Items(raidsController.getRouter());
var fermesController = new Fermes(itemsController.getRouter());
var foretsController  = new Forets(itemsController.getRouter())

router = foretsController.getRouter()

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
