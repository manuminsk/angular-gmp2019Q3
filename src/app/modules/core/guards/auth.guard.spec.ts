import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [RouterTestingModule, HttpClientTestingModule, OverlayModule]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
