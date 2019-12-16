import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPageComponent } from './course-edit-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, OverlayModule],
      providers: [Location],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
