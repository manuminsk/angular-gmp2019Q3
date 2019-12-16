import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';
import * as fromCourse from './reducers/course.reducer';

export interface State {
  auth: fromUser.State;
  courses: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromUser.reducer,
  courses: fromCourse.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
