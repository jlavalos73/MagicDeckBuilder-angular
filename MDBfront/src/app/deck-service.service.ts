import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deck } from './models/deck';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeckServiceService {
  deleteDeck(deck: Deck) {
    return this.http.delete<Deck>('http://54.211.173.35:8085/MDB/deck')
  }
  updateDeck(currentDeck: Deck) {
    return this.http.patch('http://54.211.173.35:8085/MDB/deck', currentDeck)
  }
  addDeck(deck: Deck): Observable<Deck> {
    console.log(deck);
    
    return this.http.post<Deck>('http://54.211.173.35:8085/MDB/deck', deck)
  }

  constructor(private http:  HttpClient) { }

  getDeck(id: string): Observable<Deck> {
    return this.http.get<Deck>(`http://54.211.173.35:8085/MDB/deck/${id}`)
  }
}
