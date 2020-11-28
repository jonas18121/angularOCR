# Ecoutez l'utilisateur avec les Forms avec  La méthode template

En Angular, il y a `deux grandes méthodes pour créer des formulaires` :
.
    - `la méthode template` : on crée un formulaire dans le template, 
        et Angular l'analyse pour comprendre les différents inputs 
        et pour en mettre à disposition le contenu ;
.
    - `la méthode réactive` : on crée un formulaire en TypeScript et dans le template. 
        Puis on fait la liaison manuellement.
        Cette approche est plus complexe, mais elle permet beaucoup plus de contrôle 
        avec une approche dynamique.


Ne pas oublier d'`importer FormsModule dans AppModule` si ce n'est pas déjà fait !

-------------------------------------------------------------------------------------

## Créer le formulaire

On va crée un nouveau Component AddAppareilComponent qui permettra à l'user 
d'enregistrer un nouvel appareil électrique :

exemple :

dans add-appareil.component.html

    < div class="row">
        < div class="col-sm-8 col-sm-offset-2">

`            < form (ngSubmit)="onSubmit(form_add_appareil)" #form_add_appareil="ngForm">`

                < div class="form-group">
                    < label for="name">Nom de l'appareil< /label>
 `                   < input type="text" id="name" class="form-control" name="name" ngModel>`
                < /div>

                < div class="form-group">
                    < label for="status">Etata de l'appareil< /label>
`                    < select id="status" class="form-control" name="status" ngModel>`
                        < option value="allumé">Allumé< /option>
                        < option value="éteint">Eteint< /option>
                    < /select>
                < /div>

`               < button class="btn btn-primary" type="submit">Enregistrer< /button>`

            < /form>

        < /div>
    < /div>

`Angular` parcourt le template et `trouve la balise < form>`, `créant` ainsi `un objet qui`
`sera utilisable depuis le code TypeScript`. 

`On signale à Angular` quels inputs correspond à des controls,
c'est-à-dire `des champs dont le contenu est à soumettre`.

Pour cela, `il suffit d'ajouter deux attributs aux inputs` en question : 
un `attribut name`, qui correspondra à la `clef de la paire clef-valeur` qui sera rendu, 

et l'`attribut ngModel` , sans parenthèses ni crochets.  
ngModel `signale à Angular qu'on souhaite enregistrer ce contrôle.`

On déclare le `button de type submit` et on `ajoute (ngSubmit)="onSubmit(f)" #f="ngForm" dans la balise  < form >`
    < form (ngSubmit)="onSubmit(f)" #f="ngForm">

Déclarer le bouton de type submit à l'intérieur du  < form>  déclenche le comportement de soumission classique de HTML.  

En ajoutant l'`attribut  (ngSubmit)` , on reçois cette soumission et `on exécute la méthode  onSubmit()`.

L'`attribut  #f  est une référence locale`. c'est a dire qu'on donne simplement un nom à l'objet sur lequel on ajoute cet attribut ;
Ce nom sera ensuite utilisable par Angular

`De manière générale, on ne donne pas de valeur à une référence locale` : on écrit simplement  #f  ou  #my-name . 
`Dans le cas précis d'un formulaire en méthode template, on y attribue la valeur  ngForm  pour avoir accès à l'objet créé par Angular.`

Pour récapituler : quand l'utilisateur clique sur le bouton de type submit, 
la méthode que vous attribuez à  (ngSubmit)  est exécutée, 
et grâce à la référence locale  #f="ngForm" , on peut passer l'objet à la méthode 
(et donc la récupérer dans votre code TypeScript).