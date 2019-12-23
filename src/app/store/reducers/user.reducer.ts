import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../../modules/core/models/user.class';
import * as userActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  token: string;
  user: User;
}

export const initialState: State = {
  token: null,
  user: null
};

const userReducer = createReducer(
  initialState,
  on(userActions.loginSuccess, (state, { token }) => ({ ...state, token })),
  on(userActions.restoreSession, (state, { token }) => ({ ...state, token })),
  on(userActions.logout, state => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
