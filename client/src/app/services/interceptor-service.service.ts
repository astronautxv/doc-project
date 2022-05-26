import { Injectable } from '@angular/core'; 
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, Subject, of, throwError } from 'rxjs'; 
import { map } from 'rxjs/operators'; 
import { Router } from '@angular/router'; 
 
import { tap, catchError } from 'rxjs/operators'; 
import { AuthService } from './auth.service'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class InterceptorService { 
 
  constructor( 
    private router: Router, 
    private _auth: AuthService 
  ) { } 
 
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> { 

    request = request.clone({ headers: request.headers.set('Accept', 'application/json').set('Content-Type', 'application/json') }).clone({ 
      setHeaders: { 
        Authorization: `Bearer ${this._auth.getToken()}` 
      } 
    });     


    return next.handle(request) 
  }
 
}