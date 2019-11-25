import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditPageComponent } from './course-edit-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseEditPageComponent', () => {
  let component: CourseEditPageComponent;
  let fixture: ComponentFixture<CourseEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditPageComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
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
