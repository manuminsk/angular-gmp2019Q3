import { ChangeDetectionStrategy, Component, OnInit, OnChanges } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnChanges {
  public courses: ICourse[] = [];

  constructor() {
    console.log('Course List Component // Counstructor');
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

  public ngOnChanges() {
    console.log('Course List Component // OnChanges');
  }

  public ngOnInit() {
    console.log('Course List Component // OnInit');

    for (let i = 0; i < 10; i++) {
      this.courses.push(new Course({
        id: i.toString(),
        title: `Video Course ${i + 1}`,
        thumbnail: '',
        creationDate: 'Test creation date',
        duration: 120,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }));
    }
  }

  // https://angular.io/guide/lifecycle-hooks
  // ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
}
