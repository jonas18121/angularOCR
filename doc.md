

Le dossier e2e sert pour faire du tests end-to-end

Le dossier  node_modules  contient toutes les dépendances pour votre application : les fichiers source Angular et TypeScript, par exemple.


//////////////////////////////////////////

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



    //////////////////////////////////////////////////////////

déclaration de variable

    dans fichier xxx.component.ts , on declare une variable dans la class exemple, nomDeVariable : string = 'valeur de la variable';

    dans fichier xxx.component.html , on affiche une variable avec les accolades exemple {{ nomDeVariable }}


déclaration de function

    dans fichier xxx.component.ts , on declare une function dans la class exemple :
      getFunction()
    {
      return this.nomDeVariable;
    }

    dans fichier xxx.component.html , on affiche une getFunction() avec les accolades exemple {{ getFunction() }}