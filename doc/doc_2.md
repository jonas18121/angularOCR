## Service

un `service permet de centraliser des parties de votre code et des données` qui sont utilisées par plusieurs parties de votre application ou `de manière globale par l'application entière.` 

Lesrvices permettent : 

   - `de ne pas avoir le même code doublé ou triplé à différents niveaux de l'application` - ça facilite donc la maintenance, la lisibilité et la stabilité du code .

   - `de ne pas copier inutilement des données` - si tout est centralisé, `chaque partie de l'application aura accès aux mêmes informations, évitant beaucoup d'erreurs potentielles`.


### Injection et instances de services

Pour être utilisé dans l'application, `un service doit être injecté`, et `le niveau choisi pour l'injection est très important`.  Il y a `trois niveaux possibles pour cette injection` :

   - 1 - `dans  AppModule`  : ainsi, `la même instance du service` sera utilisée par `tous les components de l'application et par les autres services` ;

   - 2 - `dans  AppComponent`  : comme ci-dessus, `tous les components` auront accès à `la même instance du service` mais `pas les autres services` ;

   - 3 - `dans un autre component` : le `component lui-même et tous ses enfants` (c'est-à-dire tous les components qu'il englobe) auront accès à la même instance du service, `mais le reste de l'application n'y aura pas accès`.

