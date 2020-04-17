import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from '../user-profile.service';
import { User } from '../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { equal, notEqual } from 'assert';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  editorForm: FormGroup;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  user: User;
  updateSuccessMsg: string;
  updateSuccess: boolean = false;
  constructor(private userProfileServ: UserProfileService, private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = this.userProfileServ.getCurrentUser();
    this.editorForm = this.formBuilder.group({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  }

  onSaveProfile() {
    this.user.email = this.editorForm.controls.email.value;
    // this.user.password = this.editorForm.controls.password.value;
    this.user.firstName = this.editorForm.controls.firstName.value;
    this.user.lastName = this.editorForm.controls.lastName.value;
    // this.userProfileServ.update(this.user);
    this.updateSuccess = true;
    this.updateSuccessMsg = 'User profile was updated successfully.';
  }

}
