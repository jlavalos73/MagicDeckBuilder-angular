import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeckServiceService {

  constructor(private http:  HttpClient) { }

  getDeck(id: number){
    return this.http.get(`http://54.211.173.35:8085/MDBback/auth/${id}`)
  }
}
