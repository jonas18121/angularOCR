import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
// les import doivent être toujours ecrit en 1er, afin d'évité des erreurs

// component de base
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{

    secondes: number;
    counterSubscription: Subscription;


    ngOnInit(){
        const counter = Observable.interval(1000);

        this.counterSubscription = counter.subscribe(
            
            (value: number) => {
                this.secondes = value;
            },

            (error) => {
                console.log('ERREUR : ' + error);
                
            },

            () => {
                console.log('Observable complete !');
            }
        );
    }

    ngOnDestroy()
    {
        this.counterSubscription.unsubscribe();
    }
}
