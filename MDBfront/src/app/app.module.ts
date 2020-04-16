/* Module Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

/* Component Imports */
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { LoginComponent } from './login/login.component';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { MdbComponent } from './mdb/mdb.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DeckViewComponent,
    CardSearchComponent,
    MdbComponent, // The Magic Deck Builder component
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
