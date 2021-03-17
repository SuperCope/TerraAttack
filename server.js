import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { router } from './movies.js'

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
console.log("DONE")
