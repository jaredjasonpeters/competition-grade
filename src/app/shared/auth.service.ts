import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { errorMonitor } from 'events';
import { Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DistributorAuth } from '../models/distributor.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshTOken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  distributor: BehaviorSubject<DistributorAuth> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
    console.log('EMAIL ', email, ' PASSWORD ', password);
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAppKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            Number(resData.expiresIn)
          );
        })
      );
  }
  logout(): void {}

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not valid!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is not valid!';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user has been disabled by the administrator';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    email: string,
    distributorId: string,
    token: string,
    expiresIn: number
  ): void {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const distributor = new DistributorAuth(
      email,
      distributorId,
      token,
      expirationDate
    );
    this.distributor.next(distributor);
  }
}
