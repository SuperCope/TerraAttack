const fetch = require("node-fetch");



let headers = {
  "Content-type": "application/json; charset=UTF-8"
};

let url = 'http://localhost:3000/api/villages';
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



url = 'http://localhost:3000/api/villages/1';
var options = {
	method: 'GET',
};
fetch(url, options)
.then(function(response) {
  // Récupérer le corps de la requete en JSON

  return response.json();
})
.then(function (json) {
    console.log("5) AFFICHAGE SPECIFIQUE")
    console.log(json)
  // Utiliser notre objet JSON
})


let data = {
    nom : "Village test",
    nbHabitants: "0",
    pointVies: "100",
    niveau: "1",
    nbNourriture: "0",
    nbBois: "0",
    nbOr: "0",
    nbArgile: "0",
    nbPierre: "0",
    idRempart: [],
    idPrisonnier: []
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




// l'URL du Service Web
console.log("3/ SUPPRESSION")
url = 'http://localhost:3000/api/villages/3';
// Les options de la requete
options = {
	method: 'DELETE',
};
 
fetch(url, options)
.then(function(response) {
	// Le résultat du POST
})




url = 'http://localhost:3000/api/villages/2';
data = {
    nom : "Village Test 2",
    nbHabitants: "0",
    pointVies: "100",
    niveau: "1",
    nbNourriture: "0",
    nbBois: "0",
    nbOr: "0",
    nbArgile: "0",
    nbPierre: "0",
    idRempart: [],
    idPrisonnier: []
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
