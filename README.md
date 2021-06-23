# TerraAttack
1) Lancer le serveur (port 3000):

Aller dans le dossier serveur et exécuter la commande :
    deno run --allow-net server.js

2) Lancer le serveur apache (port 8000):
    php -S localhost:8000

3) Accèder à une table de la bdd:
   http://localhost:3000/api/ [nomDeLaTable]

   headers: {'Content-Type' : 'application/json',
   'Access-Control-Allow-Origin' : '*',
   'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Origin' : 'http://localhost:3000',
   'Access-Control-Allow-Credentials': true,
   'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Options'
   }