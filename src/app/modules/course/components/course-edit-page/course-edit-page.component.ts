import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditPageComponent implements OnInit {
  public title: string = 'Edit course';
  public course: ICourse;

  constructor(private readonly courseService: CourseService, private readonly activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.courseService.getCourse(id).subscribe(course => {
        this.course = course;
      });
    });
  }

}
