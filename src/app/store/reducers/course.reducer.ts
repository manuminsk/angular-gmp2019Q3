import { Action, createReducer, on } from '@ngrx/store';

import { Course } from '../../modules/course/models/course.class';
import * as CourseActions from '../actions/course.actions';

export const courseFeatureKey = 'course';

export interface State {
  list: Course[];
}

export const initialState: State = {
  list: []
};

const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCoursesSuccess, (state, { data }) => ({ ...state, list: data })),
  on(CourseActions.loadMoreCoursesSuccess, (state, { data }) => ({ ...state, list: [...state.list, ...data] }))
);

export function reducer(state: State | undefined, action: Action) {
  return courseReducer(state, action);
}
