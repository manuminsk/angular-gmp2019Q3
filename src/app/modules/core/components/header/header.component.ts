import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(readonly authService: AuthService, readonly router: Router) {}

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
