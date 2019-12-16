import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/modules/core/services/auth.service';

import * as userActions from '../actions/user.actions';
import { catchError, map, tap, mergeMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      exhaustMap(action =>
        this.authService.login(action.credentials).pipe(
          map(data => userActions.loginSuccess(data)),
          catchError(error => of(userActions.loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.loginSuccess),
        tap(action => {
          this.authService.saveToken(action.token);
          this.router.navigateByUrl('courses');
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.logout),
        tap(() => {
          this.authService.logout();
          this.router.navigateByUrl('login');
        })
      ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly authService: AuthService, private readonly router: Router) {}
}
