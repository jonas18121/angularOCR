# Ecoutez l'utilisateur avec les Forms avec  La méthode réactive

À la différence de la méthode template où Angular crée l'objet du formulaire, pour `la méthode réactive`,
`on le crée nous-même et on le relier à notre template.`  
Même si cela a l'air plus complexe, `cela nous permet de gérer notre formulaire en détail,` 
notamment `avec la création programmatique de contrôles `
(permettant, par exemple, à l'utilisateur d'ajouter des champs).



pour l'exemple on va permettre aux utilisateurs de créer un profil utilisateur simple

on va `creér le modèle User`  ; 
on crée un nouveau `dossier  models` ,  et dedans un fichier  `User.model.ts` .

`Ce modèle pourra donc être utilisé dans le reste de l'application en l'important` dans les components où on à besoin.

`La syntaxe de son constructeur permet l'utilisation du mot-clé  new`, et les arguments passés seront 
attribués à des variables qui portent les noms choisis ici,

exemple :
`const user = new User('James', 'Smith', 'james@james.com', 'jus d\'orange', ['football', 'lecture'])`.
 
`ça créera un nouvel objet User avec ces valeurs attribuées aux variables` :
    - user.firstName ,  
    - user.lastName  
    - etc.

exemple dans `models/User.model.ts`

    export class User {
        constructor(
            public firstName: string,
            public lastName: string,
            public email: string,
            public drinkPreference: string,
            public hobbies?: string[]
        ) {}
    }

public hobbies?: string[] :
` Le point d'interrogation veut dire que c'est optionnel` 
` string[] veut dire que c'est un array de type string` 




Ensuite, `on crée un UserService simple qui stockera la liste des objets User` et qui comportera une `méthode permettant d'ajouter un utilisateur à la liste`

Ce service contient un array privé qui contiendra des objets de type User
et un Subject pour émettre cet array.

La méthode  `emitUsers()  déclenche ce Subject` et la méthode  `addUser()  ajoute un objet  User  à l'array`, 
puis déclenche le Subject.

`On ajoute UserServices à l'array providers dans AppModule !`

exmple dans `UserServices` :

    import { User } from '../models/User.model';
    import { Subject } from 'rxjs/Subject';

    export class UserService {
        private users: User[];
        userSubject = new Subject<User[]>();

        emitUsers() {
            this.userSubject.next(this.users.slice());
        }

        addUser(user: User) {
            this.users.push(user);
            this.emitUsers();
        }
    }

private users: User[]; ça veut dire que la variable users prend un tableau de type User

--------------------------------------------------------------------------------------------

L'étape suivante est de créer  `UserListComponent`

`UserListComponent` est souscrit au Subject dans UserService et le déclenche pour en récupérer les informations 
et les rendre disponibles au template

exemple dans `user-list.component.ts`: 

    import { Component, OnDestroy, OnInit } from '@angular/core';
    import { User } from '../models/User.model';
    import { Subscription } from 'rxjs/Subscription';
    import { UserService } from '../services/user.service';

    @Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss']
    })
    export class UserListComponent implements OnInit, OnDestroy {

        users: User[];
        userSubscription: Subscription;

        constructor(private userService: UserService) { }

        ngOnInit() {
            this.userSubscription = this.userService.userSubject.subscribe(
                (users: User[]) => {
                    this.users = users;
                }
            );
            this.userService.emitUsers();
        }

        ngOnDestroy() {
            this.userSubscription.unsubscribe();
        }
    }


dans `user-list.component.html`

Ici, on applique des directives  *ngFor  et  *ngIf  pour afficher la liste des utilisateurs et 
leurs hobbies, s'ils en ont.

    <ul class="list-group">
`        <li class="list-group-item" *ngFor="let user of users">`
            <h3>{{ user.firstName }} {{ user.lastName }}</h3>
            <p>{{ user.email }}</p>
            <p>Cette persone préfère le {{ user.drinkPreference }}</p>
`            <p *ngIf="user.hobbies && user.hobbies.length > 0">`
            Cette personne a des hobbies !
            <span *ngFor="let hobby of user.hobbies">{{ hobby }} - </span>
            </p>
        </li>
    </ul>




Afin de pouvoir visualiser ce nouveau component, ajoutez une route  users  dans  `AppModule` ,   
`{ path: 'users', component: UserListComponent },`

et créez un  routerLink dans la navbar de `app.component.html`
`<li routerLinkActive="active" class="active" class="nav-item"><a class="nav-link" routerLink="users">Liste des users</a></li>`

Ajoutez également un objet  User  codé en dur dans le service pour voir les résultats :

dans `User.service.ts`
    private users: User[] = [
        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];


Dernière étape : il faut ajouter  `ReactiveFormsModule , importé depuis  @angular/forms` , à l'array  imports  de votre  `AppModule`  :