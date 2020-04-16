import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Card } from '../models/card';
import { User } from '../models/user';
import { CardSearchService } from '../card-search.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css'],
  providers: [CardSearchService]
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
  items = [];

  
  constructor(
    private route: ActivatedRoute,
    private searchService: CardSearchService,
    private location: Location,
    private http: HttpClient,
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
        this.searchResults = res.data.slice(0, 9);

      })
  }


  onChangePage(searchResults: Array<any>) {
    this.searchResults = searchResults;
  }

  goBack(): void {
    this.location.back();
  }

}
