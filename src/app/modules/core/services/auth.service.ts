import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';
import { IUser } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly router: Router, private readonly http: HttpClient) {}
  public login(user: IUser): void {
    this.http
      .post(`${environment.apiPrefix}${APIConst.endpoints.auth.root}${APIConst.endpoints.auth.login}`, {
        login: user.name,
        password: user.password
      })
      .subscribe((data: { token: string }) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('courses');
        }
      });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiPrefix}${APIConst.endpoints.auth.root}${APIConst.endpoints.auth.userinfo}`, {
      token: localStorage.getItem('token')
    });
  }
}
