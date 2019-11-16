import { Injectable } from '@angular/core';
import { v1 } from 'uuid';

import { IUser } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login(user: IUser): void {
    const token: string = v1();
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token').length;
  }

  public getUser(): string {
    return JSON.parse(localStorage.getItem('user')).name;
  }
}
