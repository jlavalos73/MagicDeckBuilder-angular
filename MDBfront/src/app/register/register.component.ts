import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userObs: Observable<User>;
  uploadForm: FormGroup;
  email: string; 
  password: string;
  first: string;
  last: string;
  isRegistering: boolean;
  newuser: User = <User>{};
  constructor(
    private loginserv: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      email: "",
      password: "",
      first: "",
      last: ""
    })
    this.isRegistering = true;
  }

  onSubmit(): void {
    this.newuser.email = this.uploadForm.controls.email.value;
    this.newuser.password = this.uploadForm.controls.password.value;
    this.newuser.firstName = this.uploadForm.controls.first.value;
    this.newuser.lastName = this.uploadForm.controls.last.value;
    this.loginserv.register(this.newuser);
    this.isRegistering = false;
  }

}
