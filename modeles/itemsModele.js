var url = 'http://localhost:3000/api/items/1';
var options = {
    method: 'GET'
};


url = 'http://localhost:3000/api/items/';
let data = {
    id: 5,
    nom: "ESSAI",
    cout: 10,
    nbBois: 1,
    nbOr: 2,
    nbArgile: 0,
    nbNourriture: 0,
    nbPierre: 0,
    nbMetal1: 0,
    nbMetal2: 0,
    nbMetal3: 0,
    nbMetal4: 0,
    nbMetal5: 0,
    nbMetal6: 0,
    nbBois1: 0,
    nbBois2: 0,
    nbBois3: 0,
    nbBois4: 0,
    nbBois5: 455,
    idEffets: 3
};
// Les options de la requete
options = {
    method: 'POST',
    body: JSON.stringify(data)
};
console.log("2) AJOUT DE :")
console.log(data)
fetch(url, options)
    .then(function (response) {
// Le résultat du POST
    })
    .then(function (json) {

// Utiliser notre objet JSON
    })


options = {
    method: 'GET',
};
url = 'http://localhost:3000/api/items/1';
fetch(url, options)
    .then(function(response) {
        // Récupérer le corps de la requete en JSON

        return response.json();
    })
    .then(function (json) {
        console.log("5) AFFICHAGE SPECIFIQUEE")
        console.log(json)
        // Utiliser notre objet JSON
    })

url = 'http://localhost:3000/api/items';

fetch(url)
    .then(function(response) {
        // Récupérer le corps de la requete en JSON
        return response.json();
    })
    .then(function (json) {
        console.log("1) AFFICHAGE")
        console.log(json)
        // Utiliser notre objet JSON
    })






// l'URL du Service Web
console.log("3/ SUPPRESSION")
url = 'http://localhost:3000/api/items/3';
// Les options de la requete
options = {
	method: 'DELETE',
};

fetch(url, options)
.then(function(response) {
	// Le résultat du POST
})




url = 'http://localhost:3000/api/items/1';
data = {
    id: 5,
    nom: "ESSAI MODIF",
    cout: 10,
    nbBois: 1,
    nbOr: 2,
    nbArgile: 0,
    nbNourriture: 0,
    nbPierre: 0,
    nbMetal1: 0,
    nbMetal2: 0,
    nbMetal3: 0,
    nbMetal4: 0,
    nbMetal5: 0,
    nbMetal6: 0,
    nbBois1: 0,
    nbBois2: 0,
    nbBois3: 0,
    nbBois4: 0,
    nbBois5: 455,
    idEffets: 3
};
// Les options de la requete
options = {
	method: 'PATCH',
    body: JSON.stringify(data)

};
console.log("4) MODIF DE :")
console.log(data)
fetch(url, options)
.then(function (response) {
// Le résultat du POST
})
.then(function (json) {
// Utiliser notre objet JSON
})
