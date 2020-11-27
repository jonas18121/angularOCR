import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})
export class AppareilService {

    appareilsSubject = new Subject <any[]> ();

    private appareils = [
        {
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
    ];


    constructor() { }

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
}
