import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  userObs: Observable<User>;
  uploadForm: FormGroup;
  email: string;
  password: string;
  constructor(
    private loginserv: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      email: "",
      password: ""
    });
    this.loginserv.isLoggedIn().subscribe(value  => this.isLoggedIn);
  }

  onSubmit(): void {
    this.email = this.uploadForm.controls.email.value;
    this.password = this.uploadForm.controls.password.value;
    this.loginserv.login(this.email, this.password);
    this.loginserv.isLoggedIn().subscribe(value => this.isLoggedIn);
  }

  logout() {
    this.loginserv.logout();
    this.loginserv.isLoggedIn().subscribe(value =>  this.isLoggedIn);
  }
}
