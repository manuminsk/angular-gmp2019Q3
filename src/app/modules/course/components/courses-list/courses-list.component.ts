import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Course, ICourse } from '../../models/course.class';
import { OrderByPipe, SORTING } from '../../utils/order-by.pipe';
import { FilterCoursesPipe } from '../../utils/filter-courses.pipe';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: Course[] = [];
  public initialCourses: ICourse[] = [];
  public noDataMessageText: string = 'No data. Feel free to add new course.';

  constructor(private courseService: CourseService) {}

  public ngOnInit(): void {
    this.courseService.getCourseList().subscribe((courseList) => {
      this.courses = courseList;

      new OrderByPipe().transform(this.courses, SORTING.ASC, 'creationDate');
      this.initialCourses = [].concat(this.courses);
    });
  }

  public onAddCourse(event): void {
    console.log('=== ADD COURSE ===', event);
  }

  public onEditCourse(event): void {
    console.log('=== EDIT ===', event.id);
  }

  public onDeleteCourse(event): void {
    console.log('=== DELETE ===', event.id);
  }

  public onLoadMore(event): void {
    console.log('=== LOAD MORE ===', event);
  }

  public onFindEvt(searchTerm: string): void {
    this.courses = new FilterCoursesPipe().transform(this.courses, searchTerm);
  }

  public onResetEvt(): void {
    this.courses = this.initialCourses;
  }
}
