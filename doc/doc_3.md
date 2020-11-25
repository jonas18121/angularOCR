## Créer des routes

`Une route` dans une application Angular, `est une instructions d'affichage à suivre pour chaque URL`, c'est-à-dire quel(s) component(s) il faut afficher à quel(s) endroit(s) pour un URL donné.

Puisque le routing d'une application est fondamentale pour son fonctionnement, `on déclare les routes dans  app.module.ts`

`Il est possible d'avoir un fichier séparé pour le routing`, mais en termes de fonctionnalité, cela ne change rien : `c'est juste une question d'organisation du code.`

`On crée une constante de type Routes (qu'on importe depuis  @angular/router )` qui est un array d'objets JS qui prennent une certaine forme :

exemple :
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { MonPremierComponent } from './mon-premier/mon-premier.component';
    import { AppareilComponent } from './appareil/appareil.component';
    import { FormsModule } from '@angular/forms';
    import { AppareilService } from './services/appareil.service';
    import { AuthComponent } from './auth/auth.component';
    import { AppareilViewComponent } from './appareil-view/appareil-view.component';
    `import { Routes } from '@angular/router';`
.
    `const appRoutes: Routes = [`
        `{ path: 'appareils', component: AppareilViewComponent },`
        `{ path: 'auth', component: AuthComponent },`
        `{ path: '', component: AppareilViewComponent }`
    `];`

//  path: 'appareils' =  localhost:4200/appareils 
//  component: AppareilViewComponent = le component qu'on veut afficher 


`Le path correspond au string qui viendra après le  /  dans l'URL` : sur votre serveur local, `le premier path ici correspond donc à localhost:4200/appareils` .

Atention : Ne pas ajouter de slash au début de la propriété  path .

Ensuite, le  `component  correspond au component que l'on veut afficher lorsque l'utilisateur navigue au  path  choisi.`

`path  vide`, qui correspond tout simplement à  localhost:4200  (ou à la racine de l'application seule). pour les refresh

-------------------------

Les routes sont maintenant créées, mais il faut les enregistrer dans l'application.
pour cela , il faut `importer RouterModule depuis @angular/router et l'ajouter à l'array imports dans AppModule, en appelant sa méthode forRoot()`

Maintenant que les routes sont enregistrées, `il ne reste plus qu'à dire à Angular où on souhaite afficher les components dans le template lorsque l'utilisateur navigue vers la route en question.`  On utilise la balise  < router-outlet>  :

exemple : 
    < div class="container">
    < div class="row">
        < div class="col-xs-12">
            `< router-outlet>< /router-outlet>`
        < /div>
    < /div>
    < /div>

Lorsque vous changez de route (pour l'instant, en modifiant l'URL directement dans la barre d'adresse du navigateur), la page n'est pas rechargée, mais le contenu sous la barre de navigation change

---------------------------------------

## Naviguer avec les routerLink

Pour `naviguer dans l'application en mode Single Page App (SPA)`, il faut `remplacer` l'attribut `href` qui ce trouve `dans` la balise `< a>` , par `routerLink`.
    `<a href="auth">Authentification</a>`       - recharge la page 
    `<a routerLink="auth">Authentification</a>` - ne recharge pas la page , un peut comme ajax

`routerLinkActive` permet de mettre en surbriallance la page qui est réellement actif dans la navbar
    `< li routerLinkActive="active"><a routerLink="auth">Authentification</ a></ li>`

### .navigate()

this.router.navigate(['appareils']); permet de créer des chemins à partir de variables

## Route paramétrer

dans appModules
.
    const appRoutes: Routes = [
        { path: 'appareils', component: AppareilViewComponent },
        `{ path: 'appareils/:id', component: SingleAppareilComponent },`
        { path: 'auth', component: AuthComponent },
        { path: '', component: AppareilViewComponent }
    ];

L'utilisation des `deux-points  : `  = tous les chemins de type appareils/*  seront renvoyés vers  SingleAppareilComponent

dans le component xxx.component.ts (SingleAppareilComponent ) qui représentera l'object 
`injecter  ActivatedRoute , importé depuis  @angular/router` , afin de récupérer le fragment  id  de l'URL :
Puis, `dans  ngOnInit() , vous allez utiliser l'objet  snapshot`

exemple:
    constructor(private appareilService: AppareilService,
        `private route: ActivatedRoute`) { }
.
    ngOnInit() {
        `this.name = this.route.snapshot.params['id'];`
    }

dans AppareilService
on crée une méthode qui rendra l'appareil correspondant à un identifiant 

    getAppareilById(id: number) 
    {
        const appareil = this.appareils.find(
            (my_id) => {
                return my_id.id === id;
            }
        );
        return appareil;
    }


dans SingleAppareilComponent 
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.name = this.appareilService.getAppareilById(+id).name;
        this.status = this.appareilService.getAppareilById(+id).status;
    }

`Puisqu'un fragment d'URL est forcément de type  string , `
`et que la méthode  getAppareilById()  prend un nombre comme argument,` 
`il ne faut pas oublier d'utiliser  +  avant  id  dans l'appel pour caster la variable comme nombre.`


on va intégrer l'identifiant unique dans  `AppareilComponent  et dans  AppareilViewComponent , puis créez un  routerLink  pour chaque appareil` qui permet d'en regarder le détail : 

dans AppareilComponent et AppareilViewComponent
    @Input() id: number;

dans Appareil-view.component.html
    < ul class="list-group">
        < app-appareil  *ngFor="let appareil of appareils; let i = index"
            [appareilName]="appareil.name"
            [appareilStatus]="appareil.status"
            [index]="i" 
            [id]="appareil.id">
        </ app-appareil>
    < /ul>

dans Appareil.component.html
    < h4 [ngStyle]="{color: getColor()}">
        Appareil : {{ appareilName }} -- Statut : {{ getStatus() }}
    < /h4>
    < a [routerLink]="[id]">Détail< /a>

on peut utilisez le format array pour  routerLink  en property binding afin d'accéder à la variable  id  .

