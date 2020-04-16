import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate,
  CanLoad,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  private val: boolean;

  constructor(private loginService: LoginService, private router: Router) { }
  // tslint:disable-next-line: max-line-length
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }


  // tslint:disable-next-line: max-line-length
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loginService.isLoggedIn().pipe(map(
      value => {
      if (value) {
        this.router.navigate(['/mdb']);
      }
      this.val = value;

    })).subscribe();
    return this.val;
  }

}
