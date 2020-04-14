import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { Deck } from 'src/app/models/deck';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})

export class DeckViewComponent{
  currentUser: User
  decks: Deck[] = JSON.parse(localStorage.getItem('currentUser')).Decks;
  currentDeck: Deck = null;
  setCurrentDeck(d){
    this.currentDeck = d;
  }

}

