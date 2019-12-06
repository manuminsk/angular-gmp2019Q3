import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddPageComponent implements OnInit {
  public title: string = 'Add new course';
  public course: Course;

  constructor(private readonly location: Location, private readonly courseService: CourseService) {}

  public ngOnInit(): void {
    this.course = new Course(null);
  }

  public onSubmit(course: Course): void {
    this.courseService.createCourse(course);
  }

  public onCancel(): void {
    this.location.back();
  }
}
