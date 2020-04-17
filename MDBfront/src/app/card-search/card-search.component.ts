import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Card } from '../models/card';
import { User } from '../models/user';
import { CardSearchService } from '../card-search.service';
import { LoginService } from '../login.service';
import { Deck } from '../models/deck';
import { DeckServiceService } from '../deck-service.service';



@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css'],
  providers: [CardSearchService, LoginService]
})
export class CardSearchComponent implements OnInit {

  // user: User;
  // card: Card;
  searched: boolean = false;
  searchTerms: string;
  defaultResults: Array<any>;
  cardSelected: number;
  cardInfo: Object;
  searchResults: Array<any>;
  public displayedColumns = ['name', 'type', 'bodyText', 'mana', 'power', 'toughness', 'Remove']
  page = 1;
  items = [];
  currentDeck: Deck;
  newcard: Card = {} as Card;
  decks: Deck[] = JSON.parse(localStorage.getItem('currentUser')).decks;
  constructor(
    private route: ActivatedRoute,
    private searchService: CardSearchService,
    private ls: LoginService,
    private location: Location,
    private http: HttpClient,
    private deckService: DeckServiceService
  ) {
  }
   
  ngOnInit() {
    // this.searchService.searchByName("orc")
    //   .subscribe((res:any) => {
    //     this.defaultResults = res.data;
    //   })
  }

  onCardSelected(cardSelected:any):void{
    this.searchService.getCardById(cardSelected)
      .subscribe((res:any) => {
        this.cardInfo = res;
      });
  }
  
  searchCards(): void {
    this.searchService.searchByName(this.searchTerms)
      .subscribe((res:any) => {
        console.log(res);
        this.searched = true;
        this.searchResults = res.data;//.slice(10, 19);

      })
  }

  addCard(card: any) {
    this.newcard.name = card.name;
    this.newcard.type = card.type_line;
    this.newcard.text = card.oracle_text;
    this.newcard.mana = card.mana_cost;
    this.newcard.power = card.power;
    this.newcard.toughness = card.toughness;
    this.newcard.deck_id = this.currentDeck.id;
    console.log(this.newcard);
    this.searchService.addCard(this.newcard).pipe(map((value: any) => {
      this.newcard = value;
      this.currentDeck.cards.push(this.newcard);
      this.deckService.updateDeck(this.currentDeck);
    })).subscribe();

  }

  deleteCard(card: Card) {
    this.searchService.deleteCard(card);
  }

  setCurrentDeck(d: Deck) {
    this.currentDeck = d;
  }

  goBack(): void {
    this.location.back();
  }

}
