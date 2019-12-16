import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take, distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: Course[] = [];
  public searchTerm: string = '';
  public noDataMessageText: string = 'No data. Feel free to add new course.';
  private searchTerms$: BehaviorSubject<string> = new BehaviorSubject('');
  private subscriptions: Subscription = new Subscription();

  constructor(
    readonly courseService: CourseService,
    readonly router: Router,
    readonly dialog: MatDialog,
    readonly cd: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.courseService
      .getCourseList(0, 10)
      .pipe(take(1))
      .subscribe((data: Course[]) => {
        this.courses = data;
        this.cd.markForCheck();
      });

    this.subscriptions.add(
      this.searchTerms$
        .pipe(
          distinctUntilChanged(),
          debounceTime(300),
          filter(searchTerm => searchTerm.length === 0 || searchTerm.length > 3)
        )
        .subscribe((searchTerm: string) => {
          this.courseService
            .getCourseList(0, 10, searchTerm)
            .pipe(take(1))
            .subscribe((data: Course[]) => {
              this.courses = data;
              this.cd.markForCheck();
            });
        })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public onAddCourse(): void {
    this.router.navigateByUrl('/courses/new');
  }

  public onEditCourse(event: Course): void {
    this.router.navigateByUrl(`/courses/edit/${event.id}`);
  }

  public onDeleteCourse({ id }: Course): void {
    this.openDialog(id);
  }

  public onLoadMore(): void {
    this.courseService
      .getCourseList(this.courses.length, 10, this.searchTerm)
      .pipe(take(1))
      .subscribe((data: Course[]) => {
        this.courses = [...this.courses, ...data];
        this.cd.markForCheck();
      });
  }

  public onFindEvt(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.searchTerms$.next(searchTerm);
  }

  public openDialog(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmation needed',
        question: 'Do you really want to delete this course?'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.courseService
          .removeCourse(id)
          .pipe(take(1))
          .subscribe(() => {
            this.courseService
              .getCourseList(0, 10, this.searchTerm)
              .pipe(take(1))
              .subscribe((data: Course[]) => {
                this.courses = data;
                this.cd.markForCheck();
              });
          });
      }
    });
  }
}
