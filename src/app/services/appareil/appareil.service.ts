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


}
