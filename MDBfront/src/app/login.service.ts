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
       return !!localStorage.getItem("currentUser");
     }

     isLoggedIn(): Observable<boolean>{
       return this.isLoginSubject.asObservable();
     }

     login(email: string, password: string) {
       const login = new Login();
       login.email = email;
       login.password = password;
        this.http.get<User>(`http://54.211.173.35:8085/MDBback/auth/${email}`)
          .pipe(map((data: any) => {
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.currentUserSubject.next(data);
        })).subscribe();
     }
     
     register(user: User) {
       this.http.post('http://54.211.173.35:8085/MDBback/User', user)
     }

     logout() {
       localStorage.removeItem('currentUser');
       this.currentUserSubject.next(null);
     }
}
