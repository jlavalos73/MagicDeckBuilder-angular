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
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  providers: [CardSearchService]
})
export class CardDetailComponent implements OnInit {

  cardFound: boolean = false;
  card: Object;

  constructor(
    private route: ActivatedRoute,
    private searchService: CardSearchService,
    private location: Location,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.searchService.getCardById(id)
      .subscribe((res:any) => {
        console.log(res);
        this.cardFound = true;
        this.card = res;
      });
  }

}
