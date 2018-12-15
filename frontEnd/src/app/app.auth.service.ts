import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;
  constructor() { 

  }
  isAuthenticated(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user.isLoggedIn)
      return true;
    return false;
  }
}
