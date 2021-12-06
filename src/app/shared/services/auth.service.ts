import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from './../../../environments/firebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
      .pipe(tap(this.setToken))
  }
  logout() {
    this.setToken(null)
  }
  signup(user): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, user)
      .pipe(tap(this.setToken))
  }
  isAuth() {
    return !!this.token
  }
  private setToken(res) {
    if (res) {
      const expireDate = new Date(new Date().getTime() + +res.expiresIn * 1000)
      localStorage.setItem('fb-token', res.idToken)
      localStorage.setItem('fb-token-exp', expireDate.toString())
    } else { localStorage.clear() }

  }
}
