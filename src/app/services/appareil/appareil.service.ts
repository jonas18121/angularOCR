import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppareilService {

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


    constructor() { }

    switchOnAll(){
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';  
        }
    }

    switchOffAll(){
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';  
        }
    }

    switchOnOne(i: number)
    {
        this.appareils[i].status = 'allumé';  
    }

    switchOffOne(i: number)
    {
        this.appareils[i].status = 'éteint';  
    }


}
