import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatChipsModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JsonTranslationLoader } from '@core/models/json-translation-loader.model';
import { AuthorComponent } from '../author/author.component';

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
      name: 'Test title',
      thumbnail: '',
      date: '2019-10-30',
      authors: [],
      isTopRated: false,
      length: 60,
      description: 'Test description'
    });
  }
}

describe('TestHostComponent: CourseFormComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent, TestHostComponent, AuthorComponent],
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatSlideToggleModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
        })
      ],
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
