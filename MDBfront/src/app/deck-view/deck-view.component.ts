import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { Deck } from 'src/app/models/deck';
import { DeckServiceService } from '../deck-service.service';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})

export class DeckViewComponent{
  currentUser: User = JSON.parse(localStorage.getItem("currentUser"));
  decks: Deck[] = JSON.parse(localStorage.getItem('currentUser')).decks;
  currentDeck: Deck = null;
  uploadForm: FormGroup;
  newDeck: Deck = {} as Deck;
  public displayedColumns = ['name', 'type', 'bodyText', 'mana', 'power', 'toughness']
  constructor(
    private router: Router,
    private deckserv: DeckServiceService,
    private logserv: LoginService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      name: ""
    })
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
  setCurrentDeck(d){
    this.currentDeck = d;
    localStorage.setItem('currentDeck', JSON.stringify(d));
    this.router.navigate(['/decks', d.id]);
  }

  onSubmit(){
    this.newDeck.name = this.uploadForm.controls.name.value;
    this.newDeck.owner = JSON.parse(localStorage.getItem("currentUser"));
    this.newDeck.cards = [];
    this.deckserv.addDeck(this.newDeck).subscribe(value => this.newDeck);
    this.currentUser.decks.push(this.newDeck);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  }

}

