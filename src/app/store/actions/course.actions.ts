import { createAction, props } from '@ngrx/store';
import { ICourseQuery } from 'src/app/modules/course/models/course-query.interface';
import { Course } from 'src/app/modules/course/models/course.class';

export const loadCourses = createAction('[Course] Load Courses', props<{ query: ICourseQuery }>());
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ data: Course[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: any }>());

export const loadMoreCourses = createAction('[Course] Load More Courses', props<{ query: ICourseQuery }>());
export const loadMoreCoursesSuccess = createAction('[Course] Load More Courses Success', props<{ data: Course[] }>());
export const loadMoreCoursesFailure = createAction('[Course] Load More Courses Failure', props<{ error: any }>());

export const removeCourse = createAction('[Course] Remove Course', props<{ id: string; query: ICourseQuery }>());
export const removeCourseFailure = createAction('[Course] Remove Course Failure', props<{ error: any }>());

export const createCourse = createAction('[Course] Create Course', props<{ course: Course }>());
export const createCourseSuccess = createAction('[Course] Create Course Success', props<{ data: any }>());
export const createCourseFailure = createAction('[Course] Create Course Failure', props<{ error: any }>());

export const updateCourse = createAction('[Course] Update Course', props<{ course: Course }>());
export const updateCourseSuccess = createAction('[Course] Update Course Success', props<{ data: any }>());
export const updateCourseFailure = createAction('[Course] Update Course Failure', props<{ error: any }>());
