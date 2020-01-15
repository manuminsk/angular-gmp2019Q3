import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CoursesListSearchComponent } from './courses-list-search.component';

describe('CoursesListSearchComponent', () => {
  let component: CoursesListSearchComponent;
  let fixture: ComponentFixture<CoursesListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListSearchComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit search form', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const input: DebugElement = debugElement.query(By.css('input'));

    spyOn(component, 'onChangeInput');
    input.triggerEventHandler('keyup', null);

    expect(component.onChangeInput).toHaveBeenCalled();
  });
});
