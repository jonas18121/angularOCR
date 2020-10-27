
`Le dossier e2e sert pour faire du tests end-to-end`

Le dossier  `node_modules`  contient toutes les dépendances pour votre application : les fichiers source Angular et TypeScript, par exemple.


//////////////////////////////////////////

`dans un fichier xxx.component.ts :`

    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      title = 'app';
    }

    - selector = le nom qu'on utilisera comme balise HTML pour afficher ce component, comme avec <app-root>

    - templateUrl  : le chemin vers le code HTML à injecter 

    - styleUrls  : un array contenant un ou plusieurs chemins vers les feuilles de styles qui concernent ce component

    Quand Angular rencontre la balise <app-root> dans le document HTML, il sait qu'il doit en remplacer le contenu par celui du 
    template app.component.html, en appliquant les styles app.component.scss, le tout géré par la logique du fichier app.component.ts 



    //////////////////////////////////////////////////////////

## déclaration de variable

    dans fichier xxx.component.ts , on declare une variable dans la class exemple, nomDeVariable : string = 'valeur de la variable';

    dans fichier xxx.component.html , on affiche une variable avec les accolades exemple {{ nomDeVariable }}


## déclaration de function

    dans fichier xxx.component.ts , on declare une function dans la class exemple :
      getFunction()
    {
      return this.nomDeVariable;
    }

    dans fichier xxx.component.html , on affiche une getFunction() avec les accolades exemple {{ getFunction() }}


## Property binding

`La liaison par propriété ou "property binding"` est une autre façon de créer de la `communication dynamique depuis le fichier TypeScript vers le fichier template` 

exemple :

  `on lie la propriété` disabled qui est dans le `fichier app.component.html`, `à la variable` isAuth `qui est dans le fichier app.component.ts grace au crochets` -> [disabled], ce qui `permet a la variable` isAuth `d'influencer sur la propriété` disabled
  `<button [disabled]="!isAuth">Tout allumer</button>`


## Event binding

`Event binding"` est une façon de permettre à un` code TypeScript de réagir à un évènnement venant du code html ` 
on `utilise` les `parenthèses  ()`  pour `créer une liaison à un événement`

exemple : 

  `<button (click)='onAllume()'>Tout allumer</button>`


## Two-way binding

La `liaison à double sens (ou two-way binding)` utilise la `liaison par propriété et la liaison par événement en même temps` ; on l'utilise, par exemple, pour les formulaires, afin de pouvoir `déclarer et de récupérer le contenu des champs`, entre autres.

Pour pouvoir utiliser le two-way binding, il vous faut importer  `FormsModule  depuis  @angular/forms`  dans votre application dans AppModule.ts

exemple :

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';


    import { AppComponent } from './app.component';
    import { MonPremierComponent } from './mon-premier/mon-premier.component';
    import { AppareilComponent } from './appareil/appareil.component';
    import { FormsModule } from '@angular/forms';


    @NgModule({
      declarations: [
        AppComponent,
        MonPremierComponent,
        AppareilComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }



Le two-way binding emploie le `mélange` des `syntaxes de property binding et d'event binding` : des crochets et des parenthèses  `[()]`
