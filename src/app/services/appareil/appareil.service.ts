import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppareilService {

    appareils = [
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
