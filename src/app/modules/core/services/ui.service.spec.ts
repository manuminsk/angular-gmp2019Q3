import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';
import { OverlayModule } from '@angular/cdk/overlay';

describe('UiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [OverlayModule]
    })
  );

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService);
    expect(service).toBeTruthy();
  });
});
