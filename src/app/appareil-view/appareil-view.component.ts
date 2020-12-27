import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppareilService } from '../services/appareil/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

    title = 'angularOCR ;-)';

    isAuth = false;

    appareils: any[];
    appareilSubscription: Subscription;

    
    @Input() id: number;

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

  // exo, tableau de posts
  postsStatic = [
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


    constructor(private appareilService : AppareilService)
    {
        setTimeout( 
            () => { 
                this.isAuth = true ; // permet à la variable isAuth de passer à true dans 4 secondes
            } , 4000
        );
    }

    ngOnInit(){
        this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(

            (appareils: any[] ) => {
                this.appareils = appareils;
            }
        );
        this.appareilService.emitAppareilSubject();
    }

    ngOnDestroy()
    {
        this.appareilSubscription.unsubscribe();
    }

    onAllume(){
        this.appareilService.switchOnAll();
    }

    onEteindre()
    {
        if (confirm('Êtes-vous sûr de vouloir éteindre tous vos appareils ?')) {
            this.appareilService.switchOffAll();
        }
        else{
            return null;
        }
    }

    onSave()
    {
        this.appareilService.saveAppareilsToServer();
    }

    onFetch()
    {
        this.appareilService.getAppareilsFromServer();
    }

}
