import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromUser from 'src/app/store/reducers/user.reducer';
import { login } from 'src/app/store/actions/user.actions';
import { IUser } from '../../models/user.class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  public credentials: IUser;

  constructor(private readonly store: Store<fromUser.State>) {}

  public ngOnInit(): void {
    this.credentials = {
      name: 'flastname',
      password: 'flastname'
    };
  }

  public onLogin(): void {
    this.store.dispatch(login({ credentials: this.credentials}));
  }
}
