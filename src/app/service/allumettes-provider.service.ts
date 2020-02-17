import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllumettesProviderService {

  constructor() { }

  // Retourne un array d'entier entre 10 et 15 (tableau qui illustre les allumettes)
  provideAllumettes() : Observable<Array<number>>{
    let matchesNumber = this.getRandomInt(10,15);
    return of(Array(matchesNumber).fill(1));
  }

  // Retourne un int entre 10 et 30.
  getRandomInt (min : number , max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
