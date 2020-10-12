# AngularOCR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



<!-- 

    Le dossier e2e sert pour faire du tests end-to-end

    Le dossier  node_modules  contient toutes les dépendances pour votre application : les fichiers source Angular et TypeScript, par exemple.



////////////////////////////////////////////////////

    dans un fichier xxx.component.ts :

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
 -->