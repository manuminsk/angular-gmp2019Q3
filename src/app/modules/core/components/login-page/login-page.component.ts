import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromUser from '@store/reducers/user.reducer';
import { login } from '@store/actions/user.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private readonly store: Store<fromUser.State>) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('flastname'),
      password: new FormControl('flastname')
    });
  }

  public onLogin(): void {
    this.store.dispatch(login({ credentials: this.loginForm.value }));
  }
}
