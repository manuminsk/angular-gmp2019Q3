import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private readonly courseService: CourseService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.courseService.getCourse(id).subscribe(course => {
        this.course = course;
      });
    });
  }

  public onSubmit(course: Course): void {
    this.courseService.updateCourse(course);
  }

  public onCancel(): void {
    this.location.back();
  }
}
