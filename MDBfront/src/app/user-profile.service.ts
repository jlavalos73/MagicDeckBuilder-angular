import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private currentUser: User;

  constructor() {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
  setCurrentUser(): void {}
  getCurrentUser(): User { return this.currentUser; }

  update(user:User){
    return;
  }


}
