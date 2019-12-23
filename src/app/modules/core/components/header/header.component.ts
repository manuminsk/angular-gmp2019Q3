import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromUser from '@store/reducers/user.reducer';
import { logout } from '@store/actions/user.actions';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(
    public readonly authService: AuthService,
    private readonly store: Store<fromUser.State>,
    private readonly router: Router
  ) {}

  public onLogin(): void {
    this.router.navigateByUrl('login');
  }

  public onLogout(): void {
    this.store.dispatch(logout());
  }

  public redirectToMainRoute(): void {
    this.router.navigate(['/']);
  }
}
