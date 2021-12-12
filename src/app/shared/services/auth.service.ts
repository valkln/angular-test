import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from './../../../environments/firebaseConfig';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>()
  constructor(
    private http: HttpClient
  ) { }
  get token(): string {
    const expireDate = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date() > expireDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }
  login(user): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }
  logout() {
    this.setToken(null)
  }
  signup(user): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }
  isAuth() {
    return !!this.token
  }

  private handleError(err: HttpErrorResponse) {
    const { message } = err.error.error
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found')
        break
      case 'INVALID_EMAIL':
        this.error$.next('Invalid Email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid Password')
        break
    }
    return throwError(() => err)
  }
  private setToken(res) {
    if (res) {
      const expireDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
      localStorage.setItem('fb-token', res.idToken)
      localStorage.setItem('fb-token-exp', expireDate.toString())
    } else { localStorage.clear() }

  }
}
