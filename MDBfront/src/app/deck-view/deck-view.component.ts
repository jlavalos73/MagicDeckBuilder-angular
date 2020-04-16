import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { Deck } from 'src/app/models/deck';
import { DeckServiceService } from '../deck-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})

export class DeckViewComponent{
  currentUser: User
  decks: Deck[] = JSON.parse(localStorage.getItem('currentUser')).Decks;
  currentDeck: Deck = null;
  uploadForm: FormGroup;
  newDeck: Deck;
  constructor(
    private deckserv: DeckServiceService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      name: ""
    })
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }
  setCurrentDeck(d){
    this.currentDeck = d;
  }

  onSubmit(){
    this.newDeck.name = this.uploadForm.controls.name.value;
    this.newDeck.user = JSON.parse(localStorage.getItem("currentUser"))
    this.deckserv.addDeck(this.newDeck).subscribe(value => this.newDeck);
    this.currentUser.decks.push(this.newDeck);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  }

}

