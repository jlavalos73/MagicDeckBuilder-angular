import { Injectable } from '@angular/core';
import { User } from './models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  private hasToken(): boolean {
    return localStorage.getItem("currentUser") !== null;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("currentUser") !== null;
  }

  login(email: string, password: string) {
    const login = new Login();
    login.email = email;
    login.password = password;
    this.http.post<User>(`http://54.211.173.35:8085/MDB/auth`, login)
      .pipe(map((data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
      })).subscribe();
  }

  register(user: User) {
    console.log(JSON.stringify(user));
    this.http.post<User>("http://54.211.173.35:8085/MDB/user", JSON.stringify(user), this.httpOptions)
      .pipe(map((data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
      })).subscribe();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
