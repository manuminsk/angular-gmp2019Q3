import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';

import { CourseBorderDirective } from './course-border.directive';
import { DatePipe } from '@angular/common';

@Component({
  template: `
  <div
    class="test-component"
    [appCourseBorder]="created">
  </div>`
})
class TestHostComponent {
  created: string;

  constructor() {
  }
}

describe('TestHostComponent: CourseBorderDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;
  let nativeElement;
  const dayDuration = 24 * 60 * 60 * 1000;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CourseBorderDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class *border-fresh*', () => {
    component.created = new DatePipe('en-US').transform((Date.now() - dayDuration), 'yyyy-MM-dd');

    fixture.detectChanges();
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;

    const testComponent = nativeElement.querySelector('.test-component');

    expect(testComponent.classList.contains('border-fresh') && !testComponent.classList.contains('border-future')).toBe(true);
  });

  it('should have class *border-future*', () => {
    component.created = new DatePipe('en-US').transform((Date.now() + dayDuration), 'yyyy-MM-dd');

    fixture.detectChanges();
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;

    const testComponent = nativeElement.querySelector('.test-component');

    expect(testComponent.classList.contains('border-future') && !testComponent.classList.contains('border-fresh')).toBe(true);
  });

  it('shouldn\'t have classes *border-future* or *border-fresh*', () => {
    component.created = new DatePipe('en-US').transform((Date.now() - 20 * dayDuration), 'yyyy-MM-dd');

    fixture.detectChanges();
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;

    const testComponent = nativeElement.querySelector('.test-component');

    expect(!testComponent.classList.contains('border-future') && !testComponent.classList.contains('border-fresh')).toBe(true);
  });
});