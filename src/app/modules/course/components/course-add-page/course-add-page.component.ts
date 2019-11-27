import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddPageComponent implements OnInit {
  public title: string = 'Add new course';
  public course: ICourse;

  constructor(private readonly location: Location) {}

  public ngOnInit(): void {
    this.course = new Course(null);
  }

  public onSubmit(course: ICourse): void {
    console.log('SUBMIT');
  }

  public onCancel(): void {
    this.location.back();
  }
}
