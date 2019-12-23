import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@root/environments/environment';
import * as fromUser from '@store/reducers/user.reducer';
import * as fromCourse from '@store/reducers/course.reducer';

export interface State {
  auth: fromUser.State;
  courses: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromUser.reducer,
  courses: fromCourse.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
