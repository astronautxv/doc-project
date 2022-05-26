import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService
{
    // Observable string sources
    private loginChangedSource = new Subject<boolean>();

    // Observable string streams
    loginStatusChanged$ = this.loginChangedSource.asObservable();

    // Service message commands
    updateLogin(value: any) { this.loginChangedSource.next(value); }
}