import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/modules/core/services/auth.service';

import * as UserActions from '../actions/user.actions';
import { catchError, map, tap, mergeMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Router } from '@angular/router';
import { dispatch } from 'rxjs/internal/observable/pairs';

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
