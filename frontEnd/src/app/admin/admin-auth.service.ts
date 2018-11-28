import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  get isLoggedIn() {
    return localStorage.getItem("isLoggedIn") &&
      localStorage.getItem("isLoggedIn") == 'true' &&
      localStorage.getItem("isAdmin") &&
      localStorage.getItem("isAdmin") == 'true';
  }
  setLoggedIn(value) {
    console.log("admin setLoggedIn ", value);
    localStorage.setItem("isLoggedIn", value);
  }
}
