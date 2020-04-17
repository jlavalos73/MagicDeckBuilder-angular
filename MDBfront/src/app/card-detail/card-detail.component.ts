import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Card } from '../models/card';
import { User } from '../models/user';
import { CardSearchService } from '../card-search.service';
import { LoginService } from '../login.service';
import { Deck } from '../models/deck';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [CardSearchService, LoginService]
})
export class CardDetailComponent implements OnInit {

  cardFound = false;
  card: any;

  constructor(
    private route: ActivatedRoute,
    private searchService: CardSearchService,
    private ls: LoginService,
    private location: Location,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchService.getCardById(id)
      .subscribe((res: any) => {
        // console.log(res);
        this.cardFound = true;
        this.card = res;
      });
  }

  cardToDeck() {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchService.getCardById(id)
      .subscribe((res: any) => {
        // console.log(res);
        let cString = JSON.stringify(res);
        let fullC = JSON.parse(cString);
        if (fullC) {
          console.log(fullC);
          this.ls.currentUser.subscribe(
            (usr: User) => {
              console.log(usr);
              let c = new Card(0, fullC.name, fullC.type_line, fullC.oracle_text, fullC.mana_cost, fullC.power, fullC.toughness, usr.decks[0]);
              this.searchService.addCard(c);
            }
          )
        }
      });
  }
}
