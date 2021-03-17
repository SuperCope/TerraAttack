import { Router } from 'https://deno.land/x/oak/mod.ts'
import { DataRaids } from '../datas/Raids.js'

class Raids {
    constructor(router) {
        this.routerraids = router
        this.raids = new DataRaids().getData()

        console.log(this.raids)
        this.routerraids
            .get('/api', (ctx) => {
                ctx.response.body = "API WORKING"
            })
            .get('/api/raids', (ctx) => {

                ctx.response.body = Array.from(this.raids.values())
                console.log("OK")
            })
            .get('/api/raids/:id', (ctx) => {
                if (ctx.params && ctx.params.id && this.raids.has(ctx.params.id)) {
                    ctx.response.body = this.raids.get(ctx.params.id)
                    console.log(ctx.response.body)
                }
            })
            .post("/api/raids", async({ response, request }) => {
                console.log("OK")
                const values = await (request.body().value)
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                console.log(val)
                this.raids.set(String(this.raids.size + 1), {
                    id: String(this.raids.size + 1),
                    nom: val.nom,
                    temps: val.temps,
                    mobs: val.mobs,
                    pointVies: val.pointVies,
                    type: val.type
                })
                console.log(this.raids)
                response.body = Array.from(this.raids.values())
            })
            .patch("/api/raids/:id", async({ response, request, params }) => {
                const values = await request.body().value
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                const id = await params
                console.log(values)
                console.log(id.id)
                console.log(this.raids.has(id.id))
                if (this.raids.has(String(id.id))) {
                    console.log("ACCES")
                    this.raids.set(id.id, {
                        nom: val.nom,
                        temps: val.temps,
                        mobs: val.mobs,
                        pointVies: val.pointVies,
                        type: val.type
                    })
                    console.log("ACCES 2 ")
                    console.log(this.raids)
                    response.body = this.raids.get(id.id)
                }

            })
            .delete("/api/raids/:id", async({ response, request, params }) => {
                const id = await params
                if (this.raids.has(String(id.id))) {
                    console.log("REMOVED " + id.id)
                    this.raids.delete(id.id)
                }
                response.body = Array.from(this.raids.values())
            })
        console.log("OK DOC")
    }
    getRouter() {
        return this.routerraids
    }
}
export { Raids }