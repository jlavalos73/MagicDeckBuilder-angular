import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from '@rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './models/card';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class CardSearchService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }

  getCards(): Observable<Card []> {
    return this.http.get<Card>("https://api.scryfall.com/catalog/card-names")
      .pipe(
        catchError(this.handleError<Card []>('getCards', []))
      );
  }

  // This method returns a card by Scryfall id, but there are also mtg ids and our own ids. which is best?
  // getCardById(id: number): Observable<Card> {
  //   return this.http.get<Card>(`https://api.scryfall.com/cards/${id}`)
  //     .pipe(
  //       catchError(this.handleError<Card>('getCardById'))
  //     );
  // }

  searchByName(name: string): Observable<Card []> {
    return this.http.get<Card []>(`https://api.scryfall.com/cards/search?order=name&q=${name}`)
      .pipe(
        catchError(this.handleError<Card []>('getCardByName', []))
      );
  }

  getCardRandom(): Observable<Card> {
    return this.http.get<Card>("https://api.scryfall.com/cards/random")
      .pipe(
        catchError(this.handleError<Card>('getCardRandom'))
      );
  }

  addCard(c:Card): Observable<User []> {
    console.log(c);
    return this.http.post<User []>('http://localhost:8085/MDBback/card', c)
      .pipe(
        catchError(this.handleError<any>('addCard'))
      );
  }

  deleteCard(c: Card): Observable<Card> {
    return this.http.delete<Card> 
  }
}
