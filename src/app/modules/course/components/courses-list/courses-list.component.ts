import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Course, ICourse } from '../../models/course.class';
import { OrderByPipe, SORTING } from '../../utils/order-by.pipe';
import { FilterCoursesPipe } from '../../utils/filter-courses.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];
  public initialCourses: ICourse[] = [];
  public noDataMessageText: string = 'No data. Feel free to add new course.';

  public ngOnInit(): void {
    console.log('Course List Component /2/ ngOnInit');

    for (let i = 0; i < 10; i++) {
      this.courses.push(new Course({
        id: i.toString(),
        title: `Video Course ${i + 1}`,
        thumbnail: '',
        creationDate: `2019-11-${Math.floor(Math.random() * 20)}`,
        topRated: i % 3 === 0,
        duration: Math.round(Math.random() * i * 20),
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }));
    }

    new OrderByPipe().transform(this.courses, SORTING.ASC, 'creationDate');
    this.initialCourses = [].concat(this.courses);
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
