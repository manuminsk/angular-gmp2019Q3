import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@core/services/auth.service';
import * as UserActions from '@store/actions/user.actions';

@Injectable()
export class UserEffects {
  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      exhaustMap(action =>
        this.authService.login(action.credentials).pipe(
          map(data => UserActions.loginSuccess(data)),
          catchError(error => of(UserActions.loginFailure()))
        )
      )
    )
  );

  public loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(action => {
          this.authService.saveToken(action.token);
          this.router.navigateByUrl('courses');
        })
      ),
    { dispatch: false }
  );

  public logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => {
          this.authService.logout();
          this.router.navigateByUrl('login');
        })
      ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly authService: AuthService, private readonly router: Router) {}
}
