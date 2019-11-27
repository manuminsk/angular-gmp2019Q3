import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatChipsModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';

@Component({
  template: `
    <app-course-form [course]="course"></app-course-form>
  `
})
class TestHostComponent {
  course: ICourse;
  deleteCourse: ICourse;
  editCourse: ICourse;

  constructor() {
    this.course = new Course({
      id: 'Test_id',
      title: 'Test title',
      thumbnail: '',
      creationDate: '2019-10-30',
      authors: [],
      topRated: false,
      duration: 60,
      description: 'Test description'
    });
  }
}

describe('TestHostComponent: CourseFormComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent, TestHostComponent],
      imports: [FormsModule, MatDatepickerModule, MatChipsModule, MatNativeDateModule, MatSlideToggleModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});