import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddPageComponent implements OnInit {
  public title: string = 'Add new course';
  public course: ICourse;

  public ngOnInit(): void {
    this.course = new Course(null);
  }
}
