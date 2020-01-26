import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { OverlayModule } from '@angular/cdk/overlay';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      imports: [OverlayModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
