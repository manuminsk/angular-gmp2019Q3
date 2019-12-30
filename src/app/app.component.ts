import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RootReducer from '@store/index';
import * as UserActions from '@store/actions/user.actions';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title: string = 'angular-gmp2019-Q3';

  constructor(private store: Store<RootReducer.State>, private authService: AuthService) {}

  public ngOnInit(): void {
    const token: string = this.authService.getToken();

    if (!!token) {
      this.store.dispatch(UserActions.restoreSession({ token }));
    }
  }
}
