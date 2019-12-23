import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CourseEffects } from './course.effects';

describe('CourseEffects', () => {
  let actions$: Observable<any>;
  let effects: CourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, OverlayModule, RouterTestingModule],
      providers: [CourseEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<CourseEffects>(CourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
