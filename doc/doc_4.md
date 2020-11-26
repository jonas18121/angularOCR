## Observez les donnée avec RxJS

`Pour réagir à des événements ou à des données de manière asynchrone`
Il y a le système de callback, par exemple, ou encore les Promise.  
`Avec l'API RxJS`, fourni et très intégré dans Angular, `la méthode proposée est celle des Observables`.

## Observables 

`Un Observable est un objet qui émet des informations auxquelles on souhaite réagir.`
Ces informations peuvent venir d'un champ de texte dans lequel l'utilisateur rentre des données, 
ou de la progression d'un chargement de fichier ou elles peuvent également venir de la communication avec un serveur
`Les Observables sont mis à disposition par RxJS, un package tiers qui est fourni avec Angular.`

`À cet Observable, on associe un Observer` — 
c'est un bloc de code qui sera exécuté à chaque fois que l'Observable émet une information.  
`L'Observable émet trois types d'information : des données, une erreur, ou un message complete`.  
Du coup, `tout Observer peut avoir trois fonctions : une pour réagir à chaque type d'information.`

Pour avoir accès aux Observables et aux méthodes qu'on veut utiliser, 
il faut ajouter deux imports :
    `import { Observable } from 'rxjs/Observable';`
    `import 'rxjs/add/observable/interval';`

`Le premier import` sert à rendre disponible le type Observable, 
`et le deuxième donne accès à la méthode qu'on va utiliser : la méthode  interval() , `
qui crée un Observable qui émet un chiffre croissant à intervalles réguliers et qui prend le nombre de millisecondes souhaité pour l'intervalle comme argument.

exemple : 
import { Component, OnInit } from '@angular/core';
`import { Observable } from 'rxjs/Observable';`
`import 'rxjs/add/observable/interval';`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    `const counter = Observable.interval(1000);`
  }
}

`On va observer` cet observable `avec la fonction subscribe()`
`qui prendra comme arguments entre 1 et 3 fonctions anonymes` pour gérer les trois 
types d'informations que cet Observable peut envoyer : des données, une erreur ou un message complete

exemple : On cré une variable  secondes  dans  AppComponent  et on affiche dans le template :
    < ul class="nav navbar-nav">
    < /ul>
    < div class="navbar-right">
        < p>Vous êtes connecté depuis `{{ secondes }}` secondes !</ p>
    </ div>


Dans ngOnInit , on met les 3 fonction que renvoie l'observable :
des données, une erreur ou un message complete
Dans le cas actuel, l'Observable que vous avez créé ne rendra pas d'erreur et ne se complétera pas. c'est juste un exemple
    ngOnInit() {
        const counter = Observable.interval(1000);
        counter.subscribe(

        (value) => {
            this.secondes = value;
        },
        
        (error) => {
            console.log('Uh-oh, an error occurred! : ' + error);
        },

        () => {
            console.log('Observable complete!');
        }

        );
    }