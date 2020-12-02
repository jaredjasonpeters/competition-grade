import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { DistributorAuth } from '../models/distributor-auth.model';

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
  private tokenExpirationTimer: any;
  error: string;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponseData> {
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

  autoLogin() {
    const distributorData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('distributorData'));
    if (!distributorData) {
      return;
    }

    const loadedDistributor = new DistributorAuth(
      distributorData.email,
      distributorData.id,
      distributorData._token,
      new Date(distributorData._tokenExpirationDate)
    );

    if (loadedDistributor.token) {
      this.distributor.next(loadedDistributor);
      const expirationDuration =
        new Date(distributorData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout(): void {
    this.distributor.next(null);
    localStorage.removeItem('distributorData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'The email was not valid!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password was not valid!';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user has been disabled by the administrator';
        break;
    }
    this.error = errorMessage;
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
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('distributorData', JSON.stringify(distributor));
  }
}
