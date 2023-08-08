import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  constructor() { }

  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = (name == 'jireh' && password == 'jireh');

    return of(isLoggedIn).pipe(
      delay(1000),
     tap((isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn));
  }

  logout() {
    this.isLoggedIn = false;
  }
}
