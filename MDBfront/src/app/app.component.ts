import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Magic: The Gathering Deckbuilder';
  isLoggedIn: boolean;
  
  constructor(
    private loginserv: LoginService
  ) {}

  ngOnInit(): void {
    this.loginserv.isLoggedIn().subscribe(value => this.isLoggedIn);
  }
}
