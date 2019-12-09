import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { User, IUser } from '../../models/user.class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  public credentials: IUser;

  constructor(readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.credentials = {
      name: 'flastname',
      password: 'flastname'
    };
  }

  public onLogin(): void {
    this.authService.login(this.credentials);
  }
}
