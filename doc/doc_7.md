# Interagissez avec un serveur avec HttpClient

Dans une application Angular, 
vous aurez très souvent besoin de faire des appels à un backend ou à un autre serveur — 
pour enregistrer ou charger des données, par exemple, 
ou pour effectuer des calculs ou des modifications de données que vous ne souhaitez pas faire faire par le frontend.  
`Angular met à disposition un service appelé HttpClient qui permet de créer et d'exécuter des appels HTTP` 
(fait par AJAX - Asynchronous JavaScript and XML) 
et de réagir aux informations retournées par le serveur.

Dans ce chapitre, on va configurer un backend avec le service Firebase de Google.  
Ce service permet la création d'un backend complet sans coder, 
et node comprend énormément de services, dont l'authentification, 
une base de données NoSQL et un stockage de fichiers.

## Préparer le Backend

Rendez-vous sur le site `firebase.com`, on crée un compte Google ou on s'authentifie si on en a déjà un, 
et `on click sur Accéder à la console pour créer un nouveau projet Firebase`.  
On peut le domicilier dans notre pays de résidence et lui donner le nom qu'on veut.


Une fois arrivé sur la console, `on va dans Database et on choisis le Realtime Database.`

Afin d'éviter tout problème d'authentification pour l'instant, 
On va `dans la section "Règles"` et on `définis  read  et  write  en  true` , 
puis on publie les règles modifiées 


Puis `on revient à la section Données et on note l'URL de notre base de données, `
On va en avoir besoin pour configurer les appels HTTP .


## Envoyer vers le backend