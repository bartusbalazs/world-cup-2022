import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router){}
  isLoggedIn = false;
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
