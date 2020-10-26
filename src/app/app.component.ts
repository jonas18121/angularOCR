import { Component } from '@angular/core';
// les import doivent être toujours ecrit en 1er, afin d'évité des erreurs
// component de base
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularOCR ;-)';

  isAuth = false;

  constructor(){

    /** 
     * permet à la variable isAuth de passer à true dans 4 secondes
     */
    setTimeout( 

      () => { 

        this.isAuth = true ; 

      } , 4000

    );

    
  }

  onAllume(){
    console.log('on allume tout ! ');
    
  }
}
