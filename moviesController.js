import { Router } from 'https://deno.land/x/oak/mod.ts'

const router  = new Router()

const movies = new Map();
movies.set("1", {
    id: "1",
    title: "Star Wars",
    author: "Lucas Films"
})
movies.set("2", {
    id: "2",
    title: "Bof",
    author: "Mon film"
})
movies.set("3", {
    id: "3",
    title: "Les 3 cons",
    author: "Moi"
})

router
    .get('/api', (ctx) =>{
        ctx.response.body = "API WORKING"
    })
    .get('/api/movies', (ctx) => {
        ctx.response.body = Array.from(movies.values())
    })
    .get('/api/movies/:id', (ctx) => {
        if (ctx.params && ctx.params.id && movies.has(ctx.params.id)) {
            ctx.response.body = movies.get(ctx.params.id)
            console.log(ctx.response.body)
        }  
    })
    .post("/api/movies", async ({ response, request }) => {
        console.log("OK")
        const values = await (request.body().value)
        var val = values;
        if (request.body().type == "text") {
            val  = JSON.parse(values)
        }
        console.log(val)
        movies.set(String(movies.size+1), { id: String(movies.size+1), title: val.title, author: val.author })
        console.log(movies)
        response.body = Array.from(movies.values())
    })
    .patch("/api/movies/:id", async ({ response, request,params }) => {
        const values = await request.body().value
        var val = values;
        if (request.body().type == "text") {
            val  = JSON.parse(values)
        }
        const id = await params
        console.log(values)
        console.log(id.id)
        console.log(movies.has(id.id))
        if (movies.has(String(id.id))) {
            console.log("ACCES")
            movies.set(id.id, {title: val.title, author: val.author })
            console.log("ACCES 2 ")
            console.log(movies)
            response.body = movies.get(id.id)
        }

    })
    .delete("/api/movies/:id", async ({ response, request, params }) => {
        const id = await params
        if (movies.has(String(id.id))) {
            console.log("REMOVED "+id.id)
            movies.delete(id.id) 
        }
        response.body = Array.from(movies.values())
    })
console.log("OK")

export { router }