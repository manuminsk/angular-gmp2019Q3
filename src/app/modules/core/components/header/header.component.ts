import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(readonly authService: AuthService, readonly router: Router) {}

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public onLogin(): void {
    this.router.navigateByUrl('login');
  }

  public onLogout(): void {
    this.authService.logout();
  }
  public redirectToMainRoute(): void {
    this.router.navigate(['/']);
  }
}
