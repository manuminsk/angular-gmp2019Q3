import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserEffects } from './user.effects';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, OverlayModule],
      providers: [UserEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<UserEffects>(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
