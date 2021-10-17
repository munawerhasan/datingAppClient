import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseurl = 'https://localhost:44356'

  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private httpClient: HttpClient) { }

  login(model: any) {
    return this.httpClient.post<User>(this.baseurl + '/api/Account/login', model).pipe(
      map((res: User) => {
        const user = res;
        console.log("user", user);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.httpClient.post<User>(this.baseurl + '/api/Account/register', model).pipe(
      map((res: User) => {
        const user = res;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
