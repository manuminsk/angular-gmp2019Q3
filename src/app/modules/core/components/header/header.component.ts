import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public mockUser: User;

  constructor(private authService: AuthService, private router: Router) {}

  public onLogin(): void {
    console.log('=== LOGIN ===');
    
    this.router.navigateByUrl('/');
  }

  public onLogout(): void {
    console.log('=== LOGOUT ===');

    this.authService.logout();
  }
}
