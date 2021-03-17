const fetch = require("node-fetch");



let headers = {
  "Content-type": "application/json; charset=UTF-8"
};

let url = 'http://localhost:3000/api/movies';
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



url = 'http://localhost:3000/api/movies/1';
var options = {
	method: 'GET',
};
fetch(url,options)
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
    title: 'foo', 
    author: 'jean'
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
url = 'http://localhost:3000/api/movies/3';
// Les options de la requete
options = {
	method: 'DELETE',
};
 
fetch(url, options)
.then(function(response) {
	// Le résultat du POST
})




url = 'http://localhost:3000/api/movies/2';
data = {
    title: 'modified', 
    author: 'nameModified'
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
