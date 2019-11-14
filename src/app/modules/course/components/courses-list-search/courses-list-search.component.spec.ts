import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesListSearchComponent } from './courses-list-search.component';
import { By } from '@angular/platform-browser';

describe('CoursesListSearchComponent', () => {
  let component: CoursesListSearchComponent;
  let fixture: ComponentFixture<CoursesListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListSearchComponent ],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
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
    const btn: DebugElement = debugElement.query(
      By.css('.course-search-btn')
    );

    spyOn(component, 'onSubmit');
    btn.triggerEventHandler('click', null);

    expect(component.onSubmit).toHaveBeenCalled();
  });  
});
