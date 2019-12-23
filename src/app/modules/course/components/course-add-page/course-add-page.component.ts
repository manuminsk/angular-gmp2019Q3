import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { Course } from '../../models/course.class';
import * as RootReducer from '../../../../store/index';
import * as CourseActions from '../../../../store/actions/course.actions';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddPageComponent implements OnInit {
  public title: string = 'Add new course';
  public course: Course;

  constructor(private readonly location: Location, private readonly store: Store<RootReducer.State>) {}

  public ngOnInit(): void {
    this.course = new Course(null);
  }

  public onSubmit(course: Course): void {
    this.store.dispatch(CourseActions.createCourse({ course }));
  }

  public onCancel(): void {
    this.location.back();
  }
}
