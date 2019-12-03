import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v1 } from 'uuid';

import { IUser } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly router: Router) {}
  public login(user: IUser): void {
    const token: string = v1();

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigateByUrl('courses');
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigateByUrl('login');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

  public getUser(): string {
    return JSON.parse(localStorage.getItem('user')).name;
  }
}
