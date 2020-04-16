import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Card } from '../models/card';
import { User } from '../models/user';
import { CardSearchService } from '../card-search.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {

  user: User;
  searchedCards = false;
  searchResult: Card[];
  card: Card;

  constructor(
    private route: ActivatedRoute,
    private searchService: CardSearchService,
    private location: Location,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {

  }

  // searchCards(): void {
  //   this.searchService.searchByName()
  //     .subscribe(card => {
  //       this.
  //     })
  // }

  goBack(): void {
    this.location.back();
  }

}
