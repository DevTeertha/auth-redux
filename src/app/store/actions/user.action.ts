import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[login page] login start',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[auth page] login success',
  props<{ user: any }>()
);
export const loginFailed = createAction(
  '[auth page] login failed',
  props<{ err: any }>()
);

export const registerStart = createAction(
  '[register page] register start',
  props<{ fname: string; lname: string; username: string; password: string }>()
);
export const registerSuccess = createAction(
  '[auth page] register success',
  props<{ user: any }>()
);
export const registerFailed = createAction(
  '[auth page] register failed',
  props<{ err: any }>()
);

export const getUserDetailStart = createAction(
  '[user page] user start',
  props<{ token: string }>()
);
export const getUserDetailSuccess = createAction(
  '[auth page] user success',
  props<{ user: any }>()
);
export const getUserDetailFailed = createAction(
  '[auth page] user failed',
  props<{ err: any }>()
);

export const changeUserStart = createAction(
  '[userChange page] userChange start',
  props<{ fname: string; lname: string; username: string }>()
);
export const changeUserSuccess = createAction(
  '[auth page] userChange success',
  props<{ user: any }>()
);
export const changeUserFailed = createAction(
  '[auth page] userChange failed',
  props<{ err: any }>()
);
