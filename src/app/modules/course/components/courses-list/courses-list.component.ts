import { ChangeDetectionStrategy, Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ICourse, Course } from '../../models/course.class';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public courses: ICourse[] = [];
  public noDataMessageText: string = 'No data. Feel free to add new course.';

  constructor() {
    console.log('Course List Component /0/ Counstructor');
  }

  public ngOnChanges(): void {
    console.log('Course List Component /1/ ngOnChanges');
  }

  public ngOnInit(): void {
    console.log('Course List Component /2/ ngOnInit');

    for (let i = 0; i < 10; i++) {
      this.courses.push(new Course({
        id: i.toString(),
        title: `Video Course ${i + 1}`,
        thumbnail: '',
        creationDate: `2019-11-${i + 10} 20:22:02.020`,
        duration: 120,
        // tslint:disable-next-line:max-line-length
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }));
    }
  }

  public ngDoCheck(): void {
    console.log('Course List Component /3/ ngDoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('Course List Component /4/ ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('Course List Component /5/ AfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('Course List Component /6/ AfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('Course List Component /7/ AfterViewChecked');
  }

  public ngOnDestroy(): void {
    console.log('Course List Component /8/ OnDestroy');
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

  // https://angular.io/guide/lifecycle-hooks
  // ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
}
