import { Drash } from "https://deno.land/x/drash/mod.ts"

let todos = [
    {
        "id":1,
        "nom":"Jean"
    },
    {
        "id":2,
        "nom":"Paul"
    }
]

export class TodoList extends Drash.Http.Resource {
    static paths = ["/todos"];

    public GET(){
        this.response.body = todos;
        return this.response;
    }

}
export class TodoElement extends Drash.Http.Resource {
    static paths = ["/todos/:id"];

    public GET(){
        const URL_params = this.request.getPathParam("id");
        const t = todos.find((t) => t.id == Number(URL_params));
        this.response.body = t;
        return this.response;
    }

    public DELETE(){
        const URL_params = this.request.getPathParam("id");
        const t = todos.find((t) => t.id == Number(URL_params));
        todos = todos.filter(t => t.id != Number(URL_params))
        this.response.body = "DELETED OK";
        return this.response;
    }

    public PUT(){
        const URL_params = this.request.getPathParam("id");
        const t = todos.find((t) => t.id == Number(URL_params));
        if(!t){
            throw new Drash.Exceptions.HttpException(
                404,
                'Not found',
            );
        }
        t.nom =  String(this.request.getBodyParam("nom"));
        
        this.response.body = t;
        return this.response;
    }

    public POST() {
        const t = {
            id : Math.floor(Math.random()  * Math.floor(321321)),
            nom : String(this.request.getBodyParam("title")),
        };
        todos.push(t);
        
        this.response.body = t;
        return this.response;
    }
}
