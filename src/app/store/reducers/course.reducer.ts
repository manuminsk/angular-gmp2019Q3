import { Action, createReducer, on } from '@ngrx/store';
import { Course } from '../../modules/course/models/course.class';

export const courseFeatureKey = 'course';

export interface State {
  list: Course[];
}

export const initialState: State = {
  list: []
};

const courseReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return courseReducer(state, action);
}
