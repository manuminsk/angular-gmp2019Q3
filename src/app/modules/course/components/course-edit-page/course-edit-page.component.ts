import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditPageComponent implements OnInit {
  public title: string = 'Edit course';
  public course: Course;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly location: Location,
    private readonly ref: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    const ref = this.ref;
    this.activatedRoute.params.subscribe(({ id }) => {
      this.courseService.getCourse(id).subscribe(course => {
        this.course = course;
        ref.markForCheck();
      });
    });
  }

  public onSubmit(course: Course): void {
    this.courseService
      .updateCourse(course)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/courses']);
      });
  }

  public onCancel(): void {
    this.location.back();
  }
}
