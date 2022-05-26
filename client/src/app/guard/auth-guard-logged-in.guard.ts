import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard  implements CanActivate, CanLoad {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.getToken()) {
      this._router.navigate(['create-file']);
      return false;
    }
    
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;

  }
}

