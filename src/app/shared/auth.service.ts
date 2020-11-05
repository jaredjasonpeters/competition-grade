import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = true;
  constructor() { }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
