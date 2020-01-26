import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { Course } from '@course/models/course.class';
import { CourseService } from '@course/services/course.service';
import * as RootReducer from '@store/index';
import * as CourseActions from '@store/actions/course.actions';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditPageComponent implements OnInit {
  public title: string = 'courses.heading-edit-course';
  public course: Course;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly location: Location,
    private readonly cd: ChangeDetectorRef,
    private readonly store: Store<RootReducer.State>
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.courseService.getCourse(id).subscribe(course => {
        this.course = course;
        this.cd.markForCheck();
      });
    });
  }

  public onSubmit(course: Course): void {
    this.store.dispatch(CourseActions.updateCourse({ course }));
  }

  public onCancel(): void {
    this.location.back();
  }
}
