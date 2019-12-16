import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/modules/core/models/user.class';

export const login = createAction('[User] Login', props<{ credentials: IUser }>());
export const loginSuccess = createAction('[User] Login Success', props<{ token: string }>());
export const loginFailure = createAction('[User] Login Failure');

export const logout = createAction('[User] Logout');
export const logoutSuccess = createAction('[User] Logout Success');
export const logoutFailure = createAction('[User] Logout Failure');

export const loadUser = createAction('[User] Load Users');
export const loadUserSuccess = createAction('[User] Load Users Success', props<{ data: any }>());
export const loadUserFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
