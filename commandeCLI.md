creer un nouveau projet
    `ng new mon-projet-angular --style=scss --skip-tests=true`

installer bootstrap
    avoir une version précise : `npm install bootstrap@3.3.7` 
    sinon : `npm install bootstrap` 
    puis mettre `"node_modules/bootstrap/dist/css/` dans angular.json 

    ex:
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.scss"
    ]


lancer le serveur : `ng serve` 

            ou

lancer le serveur en continue : `ng serve --open`

créer un nouveau component : `ng generate component mon-premier`