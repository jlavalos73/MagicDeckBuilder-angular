import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Deck } from '../models/deck';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckServiceService } from '../deck-service.service';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { CardSearchService } from '../card-search.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {

  deck: Deck
  deckname: string;
  public displayedColumns = ['name', 'type', 'bodyText', 'mana', 'power', 'toughness', 'Remove'];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deckService: DeckServiceService,
    private searchService:  CardSearchService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.deck = JSON.parse(localStorage.getItem('currentDeck'))
  }

  changeName(): void {
    this.deck.name = this.deckname
    this.deckService.updateDeck(this.deck)
    localStorage
  }

  deleteCard(card: Card) {
    this.searchService.deleteCard(card);
    this.router.navigate(['/decks']);
  }

  deleteDeck() {
    this.deckService.deleteDeck(this.deck);
  }

}
