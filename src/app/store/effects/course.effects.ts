import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CourseService } from 'src/app/modules/course/services/course.service';

import * as CourseActions from '../actions/course.actions';

@Injectable()
export class CourseEffects {
  public loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      exhaustMap(action =>
        this.courseService.getCourseList(action.query).pipe(
          map(data => CourseActions.loadCoursesSuccess({ data })),
          catchError(error => of(CourseActions.loadCoursesFailure({ error })))
        )
      )
    )
  );

  public loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadMoreCourses),
      exhaustMap(action =>
        this.courseService.getCourseList(action.query).pipe(
          map(data => CourseActions.loadMoreCoursesSuccess({ data })),
          catchError(error => of(CourseActions.loadMoreCoursesFailure({ error })))
        )
      )
    )
  );

  public removeCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.removeCourse),
      exhaustMap(action =>
        this.courseService.removeCourse(action.id).pipe(
          map(() => CourseActions.loadCourses({ query: action.query })),
          catchError(error => of(CourseActions.removeCourseFailure({ error })))
        )
      )
    )
  );

  public createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.createCourse),
      exhaustMap(action =>
        this.courseService.createCourse(action.course).pipe(
          map(data => CourseActions.createCourseSuccess({ data })),
          catchError(error => of(CourseActions.createCourseFailure({ error })))
        )
      )
    )
  );

  public createCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.createCourseSuccess),
        tap(() => {
          this.router.navigate(['/courses']);
        })
      ),
    {
      dispatch: false
    }
  );

  public updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.updateCourse),
      exhaustMap(action =>
        this.courseService.updateCourse(action.course).pipe(
          map(data => CourseActions.updateCourseSuccess({ data })),
          catchError(error => of(CourseActions.updateCourseFailure({ error })))
        )
      )
    )
  );

  public updateCourseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CourseActions.updateCourseSuccess),
        tap(() => {
          this.router.navigate(['/courses']);
        })
      ),
    {
      dispatch: false
    }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly courseService: CourseService,
    private readonly router: Router
  ) {}
}
