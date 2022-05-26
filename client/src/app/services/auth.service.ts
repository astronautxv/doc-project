import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  getUserDetails() {
    try {
      return jwt_decode(localStorage.getItem('token')!);
    } catch(Error) {
      return null;
    }
    /*
    let y: any;
    if (localStorage.getItem('userInfo')) {
      y = localStorage.getItem('userInfo');
      y = JSON.parse(y);
    } else {
      y = null;
    }
    return y;
    */
    // return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  }

  setDataInLocalStorage(variableName: any, data: any) {
    localStorage.setItem(variableName, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getTokenDecoded()
  {
    try 
    {
      return jwt_decode(localStorage.getItem('token')!);
    } 

    catch(Error) 
    {
      return null;
    }
  }

  clearStorage() {
    localStorage.clear();
  }
}