import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.class';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  public credentials: FormGroup;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.credentials = new FormGroup({
      name: new FormControl('Andrei Shelenhouski'),
      password: new FormControl('MySuperPassword')
    });
  }

  public onLogin(): void {
    const credentials: User = new User(this.credentials.value);

    this.authService.login(credentials);

    console.log('=== LOG IN ===', credentials);
  }
}
