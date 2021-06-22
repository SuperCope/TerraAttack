class ForetController{
    fetch
    constructor() {
        this.fetch = require("node-fetch");
    }

    findAll(){
        let headers = {
            "Content-type": "application/json; charset=UTF-8"
        };

        let url = 'http://localhost:3000/api/forets';
        this.fetch(url)
            .then(function(response) {
                // Récupérer le corps de la requete en JSON

                return response.json();
            })
            .then(function (json) {
                console.log("1) AFFICHAGE")
                console.log(json)
                // Utiliser notre objet JSON
            })
    }
    findById(id){
        let url = 'http://localhost:3000/api/forets/'+id
        var options = {
            method: 'GET',
        };
        console.log(url)
        this.fetch(url, options)
            .then(function(response) {
                // Récupérer le corps de la requete en JSON

                return response.json();
            })
            .then(function (json) {
                console.log("5) AFFICHAGE SPECIFIQUE")
                console.log(json)
                // Utiliser notre objet JSON
            })
    }
    add(nbBucherons,capacite,niveau){
        let url = 'http://localhost:3000/api/forets/';
        let data = {
            nbBucherons: nbBucherons,
            capacite: capacite,
            niveau: niveau
        };
        // Les options de la requete
        let options = {
            method: 'POST',
            body: JSON.stringify(data)

        };
        console.log("2) AJOUT DE :")
        console.log(data)
        this.fetch(url, options)
            .then(function (response) {
            // Le résultat du POST
            })
            .then(function (json) {

            // Utiliser notre objet JSON
            })
    }
    delete(id){
        // l'URL du Service Web
        console.log("3/ SUPPRESSION")
        let url = 'http://localhost:3000/api/forets/'+id;
        // Les options de la requete
        let options = {
            method: 'DELETE',
        };

        this.fetch(url, options)
            .then(function(response) {
                // Le résultat du POST
            })
    }
    edit(id,nbBucherons,capacite,niveau){
        let url = 'http://localhost:3000/api/forets/'+id;
        let data = {
            id: id,
            nbBucherons: nbBucherons,
            capacite: capacite,
            niveau: niveau
        };
        // Les options de la requete
        let options = {
            method: 'PATCH',
            body: JSON.stringify(data)

        };
        console.log("4) MODIF DE :")
        console.log(data)
        this.fetch(url, options)
            .then(function (response) {
            // Le résultat du POST
            })
            .then(function (json) {
            // Utiliser notre objet JSON
            })

    }

}
// var essai = new ForetController();
// essai.add(8,90,1)
// essai.add(8,90,1)
// essai.delete(4)
// essai.findAll()
// essai.findById(1)
// essai.edit(50,555555,55555,55555,5555)
// essai.findAll()
