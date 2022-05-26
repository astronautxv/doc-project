import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor
  (
    private _api: ApiService,
    private _auth: AuthService,
    private _notificationService: NotificationService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() 
  {
    this._api.postTypeRequest('login', this.form.value).subscribe((res: any) => {

      if (res.access_token) 
      {
        this._auth.setDataInLocalStorage('token', res.access_token)
        this.router.navigate(['profile'])
        this._notificationService.updateLogin(true)
      }

    }, err => {
      console.log(err)
    });
  }

}