import { Component } from '@angular/core';
// les import doivent être toujours ecrit en 1er, afin d'évité des erreurs
// component de base
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'angularOCR ;-)';

  isAuth = false;

  /**
   * on va faire une Promise pour imiter un serveur afin de
   * pouvoir utiliser le Pipe async
   */
  lastUpdate = new Promise((resolve, reject) => {

    const date = new Date();

    //affiche la date après 2 secondes
    setTimeout(() => {
      resolve(date);
    }, 2000);
    
  });

  appareilOne = 'machine à laver';
  appareilTwo = 'frigo';
  appareilThree = 'lave linge';
  appareilFour = 'micro onde';

  appareils = [
    {
      name : 'télévision',
      status : 'éteint'
    },
    {
      name : 'ordinateur',
      status : 'allumé'
    },
    {
      name : 'radio',
      status : 'en panne'
    }
  ];

  // exo, tableau de posts
  posts = [
    {
      title: 'post 1',
      content: 'mon premier post mon premier post mon premier post mon premier post mon premier post mon premier post',
      loveIts: '5' ,
      iLove: '90',
      iDontLove: '85',
      created_at: new Date()
    },
    {
      title: 'post 2',
      content: 'mon deuxième post mon deuxième post  mon deuxième post mon deuxième post mon deuxième post mon deuxième post mon deuxième post mon deuxième post',
      loveIts: '-10',
      iLove: '50',
      iDontLove: '60',
      created_at: new Date()
    },
    {
      title: 'post 3',
      content: 'mon troisième post mon troisième post mon troisième post mon troisième post mon troisième post mon troisième post mon troisième post mon troisième post',
      loveIts: '0',
      iLove: '0',
      iDontLove: '0',
      created_at: new Date()
    }
  ];


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
    alert('on allume tout !');
  }

}
