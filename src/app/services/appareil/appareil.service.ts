import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppareilService {

    appareilsSubject = new Subject <any[]> ();

    private appareils = [];
        /* {
            id: 1,
            name : 'télévision',
            status : 'éteint'
        },
        {
            id: 2,
            name : 'ordinateur',
            status : 'allumé'
        },
        {
            id: 3,
            name : 'radio',
            status : 'en panne'
        } 
    ];*/


    constructor(private httpClient: HttpClient) { }

    /**
     * Recevoir des données sur firebase.com en verbe http GET
     */
    getAppareilsFromServer()
    {
        this.httpClient
            .get<any[]>('https://httpclient-demo-50294-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
            .subscribe(
                (response) => {
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error) => {
                    console.log('Erreur ! : ' + error); 
                }
            );
    }

    /**
     * Envoyer des données sur firebase.com en verbe http PUT
     */
    saveAppareilsToServer()
    {
        this.httpClient
        .put('https://httpclient-demo-50294-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    emitAppareilSubject()
    {
        this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll(){
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';  
            this.emitAppareilSubject();
        }
    }

    switchOffAll(){
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';  
            this.emitAppareilSubject();
        }
    }

    switchOnOne(i: number)
    {
        this.appareils[i].status = 'allumé';  
        this.emitAppareilSubject();
    }

    switchOffOne(i: number)
    {
        this.appareils[i].status = 'éteint';  
        this.emitAppareilSubject();
    }

    getAppareilById(id: number) 
    {
        const appareil = this.appareils.find(

            (my_id) => {
                return my_id.id === id;
            }
        );
        return appareil;
    }

    addAppareil(name: string, status: string)
    {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };

        appareilObject.name = name;
        appareilObject.status = status;

        
        // prend l'id du dernier élément actuel de l'array et ajoute 1.
        // appareilObject.id = this.appareils[(this.appareils.length - 1 )].id + 1;
        appareilObject.id = (this.appareils.length - 1 ) + 1;

        console.log(appareilObject);

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
}
