import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: Subject<boolean> = new Subject();
  constructor() { }

  login(): void {
    this.loggedIn.next(true);
  }
  logout(): void {
    this.loggedIn.next(false);
  }
}
