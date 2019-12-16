import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';
import { IUser, User } from '../models/user.class';
import { IEndpoint } from '../../shared/models/endpoint.inteface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggedIn: BehaviorSubject<boolean>;

  private endpoint: IEndpoint;
  private host: string;

  constructor(private readonly router: Router, private readonly http: HttpClient) {
    this.endpoint = APIConst.getEndpoint('auth');
    this.host = `${environment.apiUrl}${this.endpoint.root}`;

    this.isUserLoggedIn = new BehaviorSubject(this.isAuthenticated());
  }

  public login(user: IUser): void {
    this.http
      .post(`${this.host}${this.endpoint.login}`, {
        login: user.name,
        password: user.password
      })
      .subscribe((data: { token: string }) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.isUserLoggedIn.next(true);
          this.router.navigateByUrl('courses');
        }
      });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.isUserLoggedIn.next(false);
    this.router.navigateByUrl('login');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${this.host}${this.endpoint.userinfo}`, {
      token: localStorage.getItem('token')
    });
  }
}
