import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RootReducer from '@store/index';
import * as UserActions from '@store/actions/user.actions';
import { AuthService } from '@core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title: string = 'angular-gmp2019-Q3';

  constructor(
    private readonly store: Store<RootReducer.State>,
    private readonly authService: AuthService,
    private readonly translate: TranslateService
  ) {
    translate.setDefaultLang('en-US');
    translate.use('en-US');
  }

  public ngOnInit(): void {
    const token: string = this.authService.getToken();

    if (!!token) {
      this.store.dispatch(UserActions.restoreSession({ token }));
    }
  }
}
