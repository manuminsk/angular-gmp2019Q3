import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

import { Course } from '@course/models/course.class';
import { CourseService } from '@course/services/course.service';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import * as RootReducer from '@store/index';
import * as CourseReducer from '@store/reducers/course.reducer';
import * as CourseActions from '@store/actions/course.actions';

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
    readonly cd: ChangeDetectorRef,
    readonly store: Store<RootReducer.State>
  ) {
    this.subscriptions.add(
      this.store
        .select((state: RootReducer.State) => state.courses)
        .subscribe((data: CourseReducer.State) => {
          this.courses = data.list;
          this.cd.markForCheck();
        })
    );
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.searchTerms$
        .pipe(
          distinctUntilChanged(),
          debounceTime(300),
          filter(searchTerm => searchTerm.length === 0 || searchTerm.length > 3)
        )
        .subscribe((searchTerm: string) => {
          this.store.dispatch(
            CourseActions.loadCourses({
              query: {
                start: 0,
                count: 10,
                searchTerm
              }
            })
          );
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
    this.store.dispatch(
      CourseActions.loadMoreCourses({
        query: {
          start: this.courses.length,
          count: 10,
          searchTerm: this.searchTerm
        }
      })
    );
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
        this.store.dispatch(
          CourseActions.removeCourse({
            id,
            query: {
              start: 0,
              count: this.courses.length,
              searchTerm: this.searchTerm
            }
          })
        );
      }
    });
  }
}
