import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
// les import doivent être toujours ecrit en 1er, afin d'évité des erreurs

// component de base
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{

    secondes: number;

    ngOnInit(){
        const counter = Observable.interval(1000);

        counter.subscribe(
            (value) => {
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
}
