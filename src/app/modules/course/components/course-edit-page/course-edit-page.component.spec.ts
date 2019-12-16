import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPageComponent } from './course-edit-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatSpinner } from '@angular/material';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditPageComponent, MatSpinner],
      imports: [RouterTestingModule, HttpClientTestingModule, OverlayModule],
      providers: [Location],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [MatSpinner] } })
      .compileComponents();
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
