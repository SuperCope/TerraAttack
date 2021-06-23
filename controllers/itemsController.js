import { Router } from 'https://deno.land/x/oak/mod.ts'
import { DataItems } from '../datas/Items.js'

class Items {
    constructor(router) {
        this.routerItems = router
        this.Items = new DataItems().getData()

        console.log(this.Items)

        this.routerItems
            .get('/api', (ctx) => {
                ctx.response.body = "API WORKING"
            })
            .get('/api/items', (ctx) => {

                ctx.response.body = Array.from(this.Items.values())
                console.log("OK")
            })
            .get('/api/items/:id', (ctx) => {
                if (ctx.params && ctx.params.id && this.Items.has(ctx.params.id)) {
                    ctx.response.body = this.Items.get(ctx.params.id)
                    console.log(ctx.response.body)
                }
            })
            .post("/api/items", async({ response, request }) => {
                console.log("OK HAHAHAH")
                const values = await (request.body().value)
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                console.log(val)
                this.Items.set(String(this.Items.size + 1), {
                    id: (this.Items.size + 1),
                    nom: val.nom,
                    cout: val.cout,
                    nbBois: val.nbBois,
                    nbOr: val.nbOr,
                    nbArgile: val.nbArgile,
                    nbNourriture: val.nbNourriture,
                    nbPierre: val.nbPierre,
                    nbMetal1: val.nbMetal1,
                    nbMetal2: val.nbMetal1,
                    nbMetal3: val.nbMetal3,
                    nbMetal4: val.nbMetal4,
                    nbMetal5: val.nbMetal5,
                    nbMetal6: val.nbMetal6,
                    nbBois1: val.nbBois1,
                    nbBois2: val.nbBois2,
                    nbBois3: val.nbBois3,
                    nbBois4: val.nbBois4,
                    nbBois5: val.nbBois5,
                    idEffets: val.idEffets
                })
                console.log("ET l'effet :"+val.idEffets)
                response.body = Array.from(this.Items.values())
            })
            .patch("/api/items/:id", async({ response, request, params }) => {
                const values = await request.body().value
                var val = values;
                if (request.body().type == "text") {
                    val = JSON.parse(values)
                }
                const id = await params
                console.log(values)
                console.log(id.id)
                console.log(this.Items.has(id.id))
                if (this.Items.has(String(id.id))) {
                    console.log("ACCES")
                    this.Items.set(id.id, {
                        nom: val.nom,
                        cout: val.cout,
                        nbBois: val.nbBois,
                        nbOr: val.nbOr,
                        nbArgile: val.nbArgile,
                        nbNourriture: val.nbNourriture,
                        nbPierre: val.nbPierre,
                        nbMetal1: val.nbMetal1,
                        nbMetal2: val.nbMetal1,
                        nbMetal3: val.nbMetal3,
                        nbMetal4: val.nbMetal4,
                        nbMetal5: val.nbMetal5,
                        nbMetal6: val.nbMetal6,
                        nbBois1: val.nbBois1,
                        nbBois2: val.nbBois2,
                        nbBois3: val.nbBois3,
                        nbBois4: val.nbBois4,
                        nbBois5: val.nbBois5,
                        idEffets: val.idEffets
                    })
                    console.log("ACCES 2 ")
                    console.log(this.Items)
                    response.body = this.Items.get(id.id)
                }

            })
            .delete("/api/items/:id", async({ response, request, params }) => {
                const id = await params
                if (this.Items.has(String(id.id))) {
                    console.log("REMOVED " + id.id)
                    this.Items.delete(id.id)
                }
                response.body = Array.from(this.Items.values())
            })
        console.log("OK DOC")
    }
    getRouter() {
        return this.routerItems
    }
}
export { Items }