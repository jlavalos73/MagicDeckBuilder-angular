import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private currentUser: User;

  constructor() {}

  setCurrentUser(): void {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
  getCurrentUser(): User { return JSON.parse(localStorage.getItem('currentUser')); }


}
