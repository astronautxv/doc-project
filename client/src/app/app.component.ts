import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  subscription?   : Subscription;

  userType: any;
  isLoggedIn?: any;

  constructor
  (
    private router: Router,
    public _authService: AuthService,
    public _notificationService: NotificationService
  ) 
  {
      // Listen to login change notifications & act accordingly
      this.subscription = this._notificationService.loginStatusChanged$.subscribe(
        () => {
          

          if(this._authService.getToken())
          {
            let tokenDecoded: any = this._authService.getTokenDecoded();
            let tokenSubject = JSON.parse(tokenDecoded.sub);
            this.isLoggedIn = true;
            this.userType = tokenSubject.type;
          }
        
          else
          {
            this.isLoggedIn = false;
          }
          // Update login status
          //this.isLoggedIn = this._authService.getToken()
        }
      );
  }

  ngOnInit()
  {
    // Notify other components to change top-right nav info accordingly
    this._notificationService.updateLogin(false);
  }

  logout()
  {
    localStorage.removeItem("token");
    // Notify other components to change top-right nav info accordingly
    this._notificationService.updateLogin(false);
    this.router.navigate(['login'])
  }
}
