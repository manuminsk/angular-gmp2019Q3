import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddPageComponent } from './course-add-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddPageComponent ],
      imports: [RouterTestingModule],
      providers: [Location],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
