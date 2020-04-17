import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from '../user-profile.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private userProfileServ: UserProfileService) { }

  ngOnInit(): void {
    this.user = this.userProfileServ.getCurrentUser();
   }


}
