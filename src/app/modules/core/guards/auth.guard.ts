import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree | Observable<boolean> {
    this.isAuthenticated = this.authService.isAuthenticated();

    if (!this.isAuthenticated) {
      const url = '/login';

      return this.router.parseUrl(url);
    }

    return this.authService.isUserLoggedIn;
  }
}
