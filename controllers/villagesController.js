import { Router } from 'https://deno.land/x/oak/mod.ts'
import { DataVillage } from '../datas/Villages.js'

class Villages {
    constructor(router) {
        this.routerVillages = router
        this.villages = new DataVillage().getData()

        console.log(this.villages)
        this.routerVillages
            .get('/api', (ctx) => {
                ctx.response.body = "API WORKING"
            })
            .get('/api/villages', (ctx) => {

                ctx.response.body = Array.from(this.villages.values())
                console.log("OK")
            })
            .get('/api/villages/:id', (ctx) => {
                if (ctx.params && ctx.params.id && this.villages.has(ctx.params.id)) {
                    ctx.response.body = this.villages.get(ctx.params.id)
                    console.log(ctx.response.body)
                }
            })
            .post("/api/villages", async({ response, request }) => {
                console.log("OK")
                const values = await (request.body().value)
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                console.log(val)
                this.villages.set(String(this.villages.size + 1), {
                    id: (this.villages.size + 1),
                    nom: val.nom,
                    nbHabitants: val.nbHabitants,
                    pointVies: val.pointVies,
                    niveau: val.niveau,
                    nbNourriture: val.nbNourriture,
                    nbBois: val.nbBois,
                    nbOr: val.nbOr,
                    nbArgile: val.nbArgile,
                    nbPierre: val.nbPierre,
                    idRempart: val.idRempart,
                    idPrisonnier: val.idPrisonnier
                })
                console.log(this.villages)
                response.body = Array.from(this.villages.values())
            })
            .patch("/api/villages/:id", async({ response, request, params }) => {
                const values = await request.body().value
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                const id = await params
                console.log(values)
                console.log(id.id)
                console.log(this.villages.has(id.id))
                if (this.villages.has(String(id.id))) {
                    console.log("ACCES")
                    this.villages.set(id.id, {
                        nom: val.nom,
                        nbHabitants: val.nbHabitants,
                        pointVies: val.pointVies,
                        niveau: val.niveau,
                        nbNourriture: val.nbNourriture,
                        nbBois: val.nbBois,
                        nbOr: val.nbOr,
                        nbArgile: val.nbArgile,
                        nbPierre: val.nbPierre,
                        idRempart: val.idRempart,
                        idPrisonnier: val.idPrisonnier
                    })
                    console.log("ACCES 2 ")
                    console.log(this.villages)
                    response.body = this.villages.get(id.id)
                }

            })
            .delete("/api/villages/:id", async({ response, request, params }) => {
                const id = await params
                if (this.villages.has(String(id.id))) {
                    console.log("REMOVED " + id.id)
                    this.villages.delete(id.id)
                }
                response.body = Array.from(this.villages.values())
            })
        console.log("OK DOC")
    }
    getRouter() {
        return this.routerVillages
    }
}
export { Villages }