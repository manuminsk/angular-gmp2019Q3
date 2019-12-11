import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddPageComponent implements OnInit {
  public title: string = 'Add new course';
  public course: Course;

  constructor(
    private readonly courseService: CourseService,
    private readonly location: Location,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.course = new Course(null);
  }

  public onSubmit(course: Course): void {
    this.courseService
      .createCourse(course)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/courses']);
      });
  }

  public onCancel(): void {
    this.location.back();
  }
}
